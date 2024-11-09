import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/User';

import dbConnect from '@/lib/dbConnect';
import { signupSchema } from '@/lib/schemas';
import { JWT } from 'next-auth/jwt';
import { IUser, UserSession, UserToken } from '@/types';
import { AdapterUser } from 'next-auth/adapters';
import { Session, User as UserType } from 'next-auth';
import mongoose, { MongooseError } from 'mongoose';
import { ERROR_MESSAGES } from '@/constants';

const config = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please provide an email address and password.');
        }

        await dbConnect();
        let user = await User.findOne({ email: credentials.email }).select(
          '+password'
        );

        if (
          !user ||
          !(await user.isPasswordCorrect(credentials.password, user.password))
        ) {
          throw new Error('Incorrect email address or password.');
        }

        return { ...user.toObject(), id: user._id.toString() }; // Ensure id is a string
      }
    }),
    CredentialsProvider({
      id: 'credentials-signup',
      name: 'credentials-signup',
      credentials: {
        fullName: { label: 'Name', type: 'text' },
        username: { label: 'Username', type: 'text' },
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        passwordConfirmation: { label: 'Confirm Password', type: 'password' }
      },
      async authorize(credentials, req) {
        try {
          const user = {
            fullName: credentials?.fullName,
            username: credentials?.username,
            email: credentials?.email,
            password: credentials?.password,
            passwordConfirmation: credentials?.passwordConfirmation
          };

          const { error } = signupSchema.validate(user);

          if (error) {
            return;
          }

          await dbConnect();
          const userDoc = await User.create(user);

          return { ...userDoc.toObject(), _id: userDoc._id.toString() };
        } catch (err) {
          if (err instanceof mongoose.mongo.MongoError && 'keyPattern' in err) {
            if (err.keyPattern && Object.keys(err.keyPattern)[0] === 'email') {
              throw new Error(ERROR_MESSAGES.nonUniqueEmail);
            } else if (
              err.keyPattern &&
              Object.keys(err.keyPattern)[0] === 'username'
            ) {
              throw new Error(ERROR_MESSAGES.nonUniqueUsername);
            } else {
              if (err.keyPattern) {
                const key = Object.keys(err.keyPattern)[0];
                const message = `Duplicate value for "${key}".`;
                throw new Error(message);
              }
            }

            throw err;
          }

          throw err;
        }
      }
    })
  ],
  callbacks: {
    async jwt({
      token,
      user
    }: {
      token: JWT;
      user: IUser | UserType | AdapterUser;
    }) {
      if (user) {
        const typedUser = user as IUser;

        token._id = typedUser._id;
        token.fullName = typedUser.fullName;
        token.username = typedUser.username;
        token.email = typedUser.email;
        token.profilePicture = typedUser.profilePicture;
      }

      return token;
    },
    async session({
      session,
      token
    }: {
      session: UserSession | Session;
      token: JWT | UserToken;
    }) {
      const typedSession = session as UserSession;
      const typedToken = token as UserToken;

      if (session?.user) {
        typedSession.user._id = typedToken._id;
        typedSession.user.fullName = typedToken.fullName;
        typedSession.user.username = typedToken.username;
        typedSession.user.email = typedToken.email;
        typedSession.user.profilePicture = typedToken.profilePicture;

        delete typedSession.user.name;
        delete typedSession.user.image;
      }

      return session;
    }
  }
};

export default config;
