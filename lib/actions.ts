'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { S3 } from '@aws-sdk/client-s3';
import { getServerSession } from 'next-auth';

import config from '@/app/api/auth/[...nextauth]/config';
import { colGhazalEntrySchema } from './schemas';
import { IUser } from '@/types';
import { getUserFromDB, updateProfilePictureInDb } from './users';
import {
  createColGhazalEntry,
  getAllColGhazalEntriesByUserFromDB,
  getAllColGhazalEntriesFromDB,
  getRecentColGhazalEntriesFromDB
} from './col-ghazal-entries';

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

  await updateProfilePictureInDb(
    newImage,
    session.user._id,
    session.user.username
  );

  revalidatePath('/', 'layout');

  return { status: 'success' };
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

export async function redirectAfterAuth() {
  revalidatePath('/', 'layout');
  redirect('/');
}
