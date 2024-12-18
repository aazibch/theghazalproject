import { S3 } from '@aws-sdk/client-s3';

import User from '@/models/User';
import dbConnect from './dbConnect';
import { resizeProfilePicture } from './images';

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

export const getUserFromDB = async (username: string) => {
  await dbConnect();

  const user = await User.findOne({ username });

  return {
    ...user.toObject(),
    _id: user._id.toString()
  };
};

export const updateProfilePictureInDb = async (
  image: File,
  userId: string,
  username: string
) => {
  if (!s3) {
    throw new Error('Could not connect to cloud storage.');
  }

  const extension = image.name.split('.').pop();
  const fileName = `${userId}-${new Date().getTime()}.${extension}`;

  // Resize profile picture.
  const resizedBufferImage = await resizeProfilePicture(image);

  // Upload to cloud storage
  await s3.putObject({
    Bucket: 'theghazalproject-user-avatars',
    Key: fileName,
    Body: resizedBufferImage,
    ContentType: image.type
  });

  await dbConnect();
  await User.findByIdAndUpdate(
    userId,
    {
      profilePicture: `https://theghazalproject-user-avatars.s3.ap-southeast-2.amazonaws.com/${fileName}`
    },
    { runValidators: true }
  );
};
