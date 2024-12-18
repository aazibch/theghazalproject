import ColGhazalEntry from '@/models/ColGhazalEntry';
import dbConnect from './dbConnect';

export const getRecentColGhazalEntriesFromDB = async () => {
  await dbConnect();

  const recentEntries = await ColGhazalEntry.find({ approved: true })
    .populate('user')
    .sort({ createdAt: -1 })
    .limit(5);

  return recentEntries;
};

export const getAllColGhazalEntriesFromDB = async () => {
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

export const getAllColGhazalEntriesByUserFromDB = async (userId: string) => {
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

export const createColGhazalEntry = async (
  couplet: { lineOne: string; lineTwo: string },
  userId: string
) => {
  const colGhazalEntry = {
    user: userId,
    couplet: [couplet.lineOne, couplet.lineTwo]
  };

  await dbConnect();
  await ColGhazalEntry.create(colGhazalEntry);
};
