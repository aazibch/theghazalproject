'use server';

import User from '@/models/User';
import jwt from 'jsonwebtoken';
import dbConnect from './dbConnect';

export const generateJwtToken = async (
  payload: Record<string, any>,
  expireTime: string
) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: expireTime
  });

  return token;
};

export const confirmEmail = async (token: string) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET!);

  if (typeof decoded === 'object' && 'email' in decoded) {
    await dbConnect();
    await User.findOneAndUpdate(
      { email: decoded.email },
      { emailConfirmed: true }
    );
  } else {
    throw new Error('Invalid token payload.');
  }
};
