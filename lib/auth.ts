'use server';

import User from '@/models/User';
import jwt from 'jsonwebtoken';
import dbConnect from './dbConnect';
import { AuthOptions, getServerSession } from 'next-auth';

// Checks if password was changed after token issuance.
export const getValidServerSession = async (config: AuthOptions) => {
  const session = await getServerSession(config);

  if (!session) {
    return null;
  }

  await dbConnect();

  const user = await User.findById(session!.user._id).select(
    '+passwordChangeDate'
  );

  const changedPasswordAfterSignIn = user.changedPasswordAfterSignIn(
    session!.signInDate
  );

  if (changedPasswordAfterSignIn) {
    return null;
  } else {
    const userObj = user.toObject();

    delete userObj.passwordChangeDate;

    return {
      data: session,
      user: { ...userObj, _id: userObj._id.toString() }
    };
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
