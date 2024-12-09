import mongoose, { ObjectId } from 'mongoose';
import { IColGhazalEntry } from '@/types';

type ColGhazalEntryModel = mongoose.Model<IColGhazalEntry>;

const colGhazalEntrySchema = new mongoose.Schema<
  IColGhazalEntry,
  ColGhazalEntryModel
>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'The collective ghazal entry must belong to a user.']
    },
    couplet: {
      type: [String],
      validator: (arr: string[]) => {
        return arr.length === 2;
      },
      message: 'The couplet must be an array with exactly two string elements.',
      required: true
    },
    approved: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const ColGhazalEntry =
  mongoose.models.ColGhazalEntry ||
  mongoose.model('ColGhazalEntry', colGhazalEntrySchema);

export default ColGhazalEntry;
