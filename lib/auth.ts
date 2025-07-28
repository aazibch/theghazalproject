'use server';

import User from '@/models/User';
import jwt from 'jsonwebtoken';
import dbConnect from './dbConnect';
import { AuthOptions, getServerSession } from 'next-auth';

export const getValidServerSession = async (config: AuthOptions) => {
  const session = await getServerSession(config);

  if (!session) {
    return null;
  }

  await dbConnect();

  const user = await User.findById(session!.user._id);

  const changedPasswordAfterToken = await user.changedPasswordAfterToken(
    session!.jwtIat
  );

  if (changedPasswordAfterToken) {
    return null;
  } else {
    return session;
  }
};

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
