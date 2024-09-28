import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/User';

import dbConnect from '@/lib/dbConnect';
import { signupSchema } from '@/lib/schemas';
import { MongooseError } from 'mongoose';

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

          const { error, value } = signupSchema.validate(user);

          if (error) {
            throw new Error(error.details[0].message);
          }

          await dbConnect();
          const userDoc = await User.create(user);

          return { ...userDoc.toObject(), id: userDoc._id.toString() };
        } catch (err) {
          // TODO: Look into the type checking again
          if (err instanceof MongooseError && 'keyPattern' in err) {
            if (err.keyPattern && Object.keys(err.keyPattern)[0] === 'email') {
              throw new Error(
                'An account with the same email address already exists.'
              );
            } else if (
              err.keyPattern &&
              Object.keys(err.keyPattern)[0] === 'username'
            ) {
              throw new Error(
                'An account with the same username already exists.'
              );
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
      token: { [key: string]: any }; // TODO: Define more strict types for the arguments
      user: { [key: string]: any };
    }) {
      if (user) {
        token.id = user._id;
        token.fullName = user.fullName;
        token.username = user.username;
        token.email = user.email;
      }

      return token;
    },
    async session({
      session,
      token
    }: {
      session: { [key: string]: any }; // TODO: Define more strict types for the arguments
      token: { [key: string]: any };
    }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.fullName = token.fullName;
        session.user.username = token.username;
        session.user.email = token.email;

        delete session.user.name;
        delete session.user.image;
      }

      return session;
    }
  }
};

export default config;
