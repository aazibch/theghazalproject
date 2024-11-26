'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import dbConnect from './dbConnect';
import ColGhazalEntry from '@/models/ColGhazalEntry';

export const getRecentColGhazalEntries = async () => {
  await dbConnect();
  const recentEntries = await ColGhazalEntry.find()
    .populate('user')
    .sort({ createdAt: -1 })
    .limit(5);

  return recentEntries;
};

export async function redirectAfterAuth() {
  revalidatePath('/', 'layout');
  redirect('/');
}

// TODO: Implement error handling.
