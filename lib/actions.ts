'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import dbConnect from './dbConnect';
import ColGhazalEntry from '@/models/ColGhazalEntry';
import { getServerSession } from 'next-auth';
import config from '@/app/api/auth/[...nextauth]/config';
import { colGhazalEntrySchema } from './schemas';

export const getRecentColGhazalEntries = async () => {
  await dbConnect();

  const recentEntries = await ColGhazalEntry.find()
    .populate('user')
    .sort({ createdAt: -1 })
    .limit(5);

  return recentEntries;
};

export const getColGhazalEntries = async () => {
  await dbConnect();

  const entries = await ColGhazalEntry.find()
    .populate('user')
    .sort({ createdAt: 1 });

  return entries;
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

  const colGhazalEntry = {
    user: session.user?._id,
    couplet: [couplet.lineOne, couplet.lineTwo]
  };

  await dbConnect();
  await ColGhazalEntry.create(colGhazalEntry);

  revalidatePath('/collective-ghazal');

  return { status: 'success' };
};

export async function redirectAfterAuth() {
  revalidatePath('/', 'layout');
  redirect('/');
}
