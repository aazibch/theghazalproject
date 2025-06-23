'use server';

import crypto from 'crypto';
import Joi from 'joi';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { S3 } from '@aws-sdk/client-s3';
import { getServerSession } from 'next-auth';

import config from '@/app/api/auth/[...nextauth]/config';
import User from '@/models/User';
import { DEFAULT_PROFILE_PICTURE, ERROR_MESSAGES } from '@/constants';
import {
  colGhazalEntrySchema,
  newPasswordSchema,
  updateAccountEmailSettingsSchema
} from './schemas';
import { IUser } from '@/types';
import {
  getUserFromDB,
  updateProfilePictureInCloud,
  updateUserInDB
} from './users';
import {
  createColGhazalEntry,
  getAllColGhazalEntriesByUserFromDB,
  getAllColGhazalEntriesFromDB,
  getRecentColGhazalEntriesFromDB
} from './col-ghazal-entries';
import dbConnect from './dbConnect';
import Email from './email';
import { generateJwtToken } from './auth';
import { formatValidationErrors } from './utils';

let s3: S3 | undefined;

if (process.env.AWS_ID && process.env.AWS_SECRET) {
  s3 = new S3({
    region: 'ap-southeast-2',
    credentials: {
      accessKeyId: process.env.AWS_ID,
      secretAccessKey: process.env.AWS_SECRET
    }
  });
}

export const getUser = async (username: string): Promise<IUser | undefined> => {
  const user = await getUserFromDB(username);

  return user;
};

export const updateProfilePicture = async (
  prevState: any,
  formData: FormData
) => {
  const newImage = formData.get('newImage') as File;

  const session = await getServerSession(config);

  if (!session) {
    throw new Error('Session not found.');
  }

  if (!session.user || (session.user && !('_id' in session.user))) {
    throw new Error('Invalid session.');
  }

  const profilePictureUrl = await updateProfilePictureInCloud(
    session.user._id,
    newImage
  );

  await updateUserInDB(session.user._id, { profilePicture: profilePictureUrl });

  revalidatePath('/', 'layout');

  return { status: 'success' };
};

interface UpdatesObj {
  fullName?: string;
  profilePicture?: File;
}

export const updateProfileSettings = async (
  updates: UpdatesObj,
  profilePictureRemoved?: boolean
) => {
  const session = await getServerSession(config);

  if (!session) {
    throw new Error('Session not found.');
  }

  const { fullName, profilePicture } = updates;

  const docUpdates: Record<string, any> = {};

  if (profilePictureRemoved) {
    docUpdates.profilePicture = DEFAULT_PROFILE_PICTURE;
  } else if (profilePicture) {
    const profilePictureUrl = await updateProfilePictureInCloud(
      session.user._id,
      profilePicture
    );
    docUpdates.profilePicture = profilePictureUrl;
  }

  if (fullName) {
    docUpdates.fullName = fullName;
  }

  await updateUserInDB(session.user._id, docUpdates);
};

export const updateAccountEmailSettings = async (
  prevState: any,
  formData: FormData
): Promise<{
  isSuccess: boolean | null;
  validationErrors?: Record<string, string>;
  formFields: Record<string, string>;
}> => {
  const session = await getServerSession(config);

  if (!session) {
    throw new Error('Session not found.');
  }

  const formFields = { email: formData.get('email') as string };

  const { error } = updateAccountEmailSettingsSchema.validate(formFields, {
    abortEarly: true
  });

  if (error) {
    const validationErrors = formatValidationErrors(error);

    return {
      isSuccess: false,
      validationErrors,
      formFields
    };
  }

  // Generate confirmation email token
  const token = await generateJwtToken({ email: formFields.email }, '1hr');

  // Send confirmation email:
  const email = new Email(
    {
      fullName: session.user.fullName,
      email: formFields.email
    },
    `${process.env.PRODUCTION_URL}auth/email?token=${token}`
  );

  await email.sendEmailConfirmation();

  await updateUserInDB(session.user._id, {
    email: formFields.email,
    emailConfirmed: false
  });

  return { isSuccess: true, formFields };
};

export const getColGhazalEntriesByUser = async (userId: string) => {
  const allEntriesByUser = await getAllColGhazalEntriesByUserFromDB(userId);

  return allEntriesByUser;
};

export const getRecentColGhazalEntries = async () => {
  const recentEntries = await getRecentColGhazalEntriesFromDB();

  return recentEntries;
};

export const getColGhazalEntries = async () => {
  const allEntries = await getAllColGhazalEntriesFromDB();

  return allEntries;
};

export const submitColGhazalCouplet = async (couplet: {
  lineOne: string;
  lineTwo: string;
}) => {
  const session = await getServerSession(config);

  if (!session) {
    throw new Error('Session not found.');
  }

  if (!session.user || (session.user && !('_id' in session.user))) {
    throw new Error('Invalid session.');
  }

  const { error } = colGhazalEntrySchema.validate(couplet);

  if (error) {
    throw error;
  }

  await createColGhazalEntry(couplet, session.user._id);

  revalidatePath('/');
  revalidatePath('/collective-ghazal');

  return { status: 'success' };
};

export async function submitEmailForPasswordReset(
  prevState: any,
  formData: FormData
): Promise<{ status: string | null; message?: string }> {
  const email = formData.get('email');

  await dbConnect();

  const user = await User.findOne({ email, emailConfirmed: true });

  if (!user) {
    return {
      status: 'failure',
      message:
        "No user with that email address exists or they didn't confirm their email address."
    };
  }

  const passwordResetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // Send email:
  try {
    const emailInstance = new Email(
      { fullName: user.fullName, email: user.email },
      `${process.env.PRODUCTION_URL}auth/password-reset/complete?token=${passwordResetToken}`
    );

    await emailInstance.sendPasswordReset();
  } catch (error) {
    user.passwordResetToken = undefined;
    user.passwordResetTokenExpirationDate = undefined;
    await user.save({ validateBeforeSave: false });

    return { status: 'failure', message: ERROR_MESSAGES.generic };
  }

  return { status: 'success' };
}

export async function resetPassword(
  token: string | null,
  password: string,
  passwordConfirmation: string
) {
  const tokenError = {
    status: 'failure',
    message: 'Oh, oh! The password reset token has expired or is invalid.'
  };

  if (!token) {
    return tokenError;
  }

  const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

  await dbConnect();
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetTokenExpirationDate: { $gt: Date.now() }
  });

  if (!user) return tokenError;

  const { error } = newPasswordSchema.validate({
    password,
    passwordConfirmation
  });

  if (error) throw error;

  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetTokenExpirationDate = undefined;
  await user.save();

  return {
    status: 'success'
  };
}

export async function redirectAfterAuth() {
  revalidatePath('/', 'layout');
  redirect('/');
}

// TODO: Change "status" property in returned objects to "isSuccess".
