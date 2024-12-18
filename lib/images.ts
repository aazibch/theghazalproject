import sharp from 'sharp';

export const resizeProfilePicture = async (image: File) => {
  const bufferImage = await image.arrayBuffer();

  const resizedBufferImage = await sharp(bufferImage)
    .resize(300, 300)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toBuffer();

  return resizedBufferImage;
};
