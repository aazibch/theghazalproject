import mongoose from 'mongoose';
import { Awaitable, User } from 'next-auth';

import { ERROR_MESSAGES } from '@/constants';
import { AuthCredentials, AuthRequest } from '@/types';

const catchAsync = (
  fn: (credentials: AuthCredentials, req: AuthRequest) => Awaitable<User | null>
) => {
  return async (credentials: AuthCredentials, req: AuthRequest) => {
    try {
      return await fn(credentials, req);
    } catch (err) {
      if (err instanceof mongoose.mongo.MongoError && 'keyPattern' in err) {
        if (err.keyPattern && Object.keys(err.keyPattern)[0] === 'email') {
          throw new Error(ERROR_MESSAGES.nonUniqueEmail);
        } else if (
          err.keyPattern &&
          Object.keys(err.keyPattern)[0] === 'username'
        ) {
          throw new Error(ERROR_MESSAGES.nonUniqueUsername);
        } else if (err.keyPattern) {
          const key = Object.keys(err.keyPattern)[0];
          const message = `Duplicate value for "${key}".`;
          throw new Error(message);
        }
      }

      throw new Error(ERROR_MESSAGES.generic);
    }
  };
};

export default catchAsync;
