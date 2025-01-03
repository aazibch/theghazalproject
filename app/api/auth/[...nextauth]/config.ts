import CredentialsProvider from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jwt';
import { Session, User as UserType } from 'next-auth';

import User from '@/models/User';
import dbConnect from '@/lib/dbConnect';
import { signupSchema } from '@/lib/schemas';
import catchAsync from '@/lib/catchAsync';
import { isSignupCredentials } from '@/lib/utils';
import { AdapterUser } from 'next-auth/adapters';
import { generateJwtToken } from '@/lib/auth';

const config = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: catchAsync(async (credentials, req) => {
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
      })
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
      authorize: catchAsync(async (credentials, req) => {
        if (isSignupCredentials(credentials)) {
          const user = {
            fullName: credentials?.fullName,
            username: credentials?.username,
            email: credentials?.email,
            password: credentials?.password,
            passwordConfirmation: credentials?.passwordConfirmation
          };

          const { error } = signupSchema.validate(user);

          if (error) {
            throw new Error(`Joi Validation: ${error.message}`);
          }

          await dbConnect();
          const userDoc = await User.create(user);

          // Create email confirmation token:
          const token = await generateJwtToken(
            { email: userDoc.email },
            '24hr'
          );
          console.log('[config.ts][Email Confirmation Token]', token);

          return { ...userDoc.toObject(), _id: userDoc._id.toString() };
        }
      })
    })
  ],
  callbacks: {
    async jwt({
      token,
      user,
      trigger
    }: {
      token: JWT;
      user: UserType | AdapterUser;
      trigger?: string | undefined;
    }) {
      if (user) {
        token._id = user._id;
        token.fullName = user.fullName;
        token.username = user.username;
        token.email = user.email;
        token.profilePicture = user.profilePicture;
        token.emailConfirmed = user.emailConfirmed;
      }

      if (trigger === 'update') {
        await dbConnect();
        const user = await User.findById(token._id);

        token.fullName = user.fullName;
        token.username = user.username;
        token.email = user.email;
        token.emailConfirmed = user.emailConfirmed;
        token.profilePicture = user.profilePicture;
      }

      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user._id = token._id;
      session.user.fullName = token.fullName;
      session.user.username = token.username;
      session.user.email = token.email;
      session.user.emailConfirmed = token.emailConfirmed;
      session.user.profilePicture = token.profilePicture;

      return session;
    }
  }
};

export default config;
