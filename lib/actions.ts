'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import dbConnect from './dbConnect';
import ColGhazalEntry from '@/models/ColGhazalEntry';
import { getServerSession } from 'next-auth';
import config from '@/app/api/auth/[...nextauth]/config';

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

export const submitColGhazalCouplet = async (
  prevState: any,
  formData: FormData
) => {
  const session = await getServerSession(config);

  if (!session) {
    throw new Error('Session not found.');
  }

  if (!session.user || (session.user && !('_id' in session.user))) {
    throw new Error('Invalid session.');
  }

  const colGhazalEntry = {
    user: session.user?._id,
    couplet: [formData.get('lineOne'), formData.get('lineTwo')]
  };

  await dbConnect();
  await ColGhazalEntry.create(colGhazalEntry);

  return { message: 'Submitted successfully!' };
};

export async function redirectAfterAuth() {
  revalidatePath('/', 'layout');
  redirect('/');
}
