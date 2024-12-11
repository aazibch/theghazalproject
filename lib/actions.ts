'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { S3 } from '@aws-sdk/client-s3';
import { getServerSession } from 'next-auth';
import config from '@/app/api/auth/[...nextauth]/config';
import dbConnect from './dbConnect';
import ColGhazalEntry from '@/models/ColGhazalEntry';
import { colGhazalEntrySchema } from './schemas';
import User from '@/models/User';
import { IUser } from '@/types';
import sharp from 'sharp';

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

export const getRecentColGhazalEntries = async () => {
  await dbConnect();

  const recentEntries = await ColGhazalEntry.find({ approved: true })
    .populate('user')
    .sort({ createdAt: -1 })
    .limit(5);

  return recentEntries;
};

export const getColGhazalEntries = async () => {
  await dbConnect();

  const entries = await ColGhazalEntry.find({ approved: true })
    .populate('user')
    .sort({ createdAt: 1 });

  return entries.map((e) => {
    const docObject = e.toObject();

    return {
      ...docObject,
      _id: docObject._id.toString()
    };
  });
};

export const getUser = async (username: string): Promise<IUser | undefined> => {
  await dbConnect();

  const user = (await User.findOne({ username })).toObject();

  return {
    ...user,
    _id: user._id.toString()
  };
};

export const getColGhazalEntriesByUser = async (userId: string) => {
  await dbConnect();

  const colGhazalEntries = await ColGhazalEntry.find({
    user: userId,
    approved: true
  });

  return colGhazalEntries.map((e) => {
    const docObject = e.toObject();

    return {
      ...docObject,
      _id: docObject._id.toString(),
      user: docObject.user.toString()
    };
  });
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

export const updateProfilePicture = async (
  prevState: any,
  formData: FormData
) => {
  if (s3) {
    const newImage = formData.get('newImage') as File;

    const session = await getServerSession(config);

    if (!session) {
      throw new Error('Session not found.');
    }

    if (!session.user || (session.user && !('_id' in session.user))) {
      throw new Error('Invalid session.');
    }

    const extension = newImage.name.split('.').pop();
    const fileName = `${session.user._id}-${new Date().getTime()}.${extension}`;

    const bufferImage = await newImage.arrayBuffer();

    // Resize profile picture.
    const resizedBufferImage = await sharp(bufferImage)
      .resize(300, 300)
      .toFormat('jpeg')
      .jpeg({ quality: 90 })
      .toBuffer();

    // Upload to cloud storage
    await s3.putObject({
      Bucket: 'theghazalproject-user-avatars',
      Key: fileName,
      Body: Buffer.from(resizedBufferImage),
      ContentType: newImage.type
    });

    await dbConnect();
    await User.findByIdAndUpdate(
      session.user._id,
      {
        profilePicture: `https://theghazalproject-user-avatars.s3.ap-southeast-2.amazonaws.com/${fileName}`
      },
      { runValidators: true }
    );

    revalidatePath(`/profile/${session.user.username}`);

    return { status: 'success' };
  } else {
    throw new Error('Could not connect to cloud storage.');
  }
};

export async function redirectAfterAuth() {
  revalidatePath('/', 'layout');
  redirect('/');
}
