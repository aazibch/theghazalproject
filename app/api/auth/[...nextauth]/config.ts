import CredentialsProvider from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jwt';
import { Session, User as UserType } from 'next-auth';

import User from '@/models/User';
import dbConnect from '@/lib/dbConnect';
import { signupSchema } from '@/lib/schemas';
import catchAsync from '@/lib/catchAsync';
import AppError, { isSignupCredentials } from '@/lib/utils';
import { AdapterUser } from 'next-auth/adapters';
import { generateJwtToken } from '@/lib/auth';
import Email from '@/lib/email';

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
          throw new AppError(
            'Please provide an email address and password.',
            400
          );
        }

        await dbConnect();
        let user = await User.findOne({ email: credentials.email }).select(
          '+password'
        );

        if (
          !user ||
          !(await user.isPasswordCorrect(credentials.password, user.password))
        ) {
          throw new AppError('Incorrect email address or password.', 401);
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
            throw new AppError(error.message, 400);
          }

          await dbConnect();
          const userDoc = await User.create(user);

          // Create email confirmation token:
          const token = await generateJwtToken({ email: userDoc.email }, '1hr');

          // Send welcome email:
          const emailConfig = {
            fullName: userDoc.fullName,
            email: userDoc.email
          };

          let email = new Email(emailConfig);
          await email.sendWelcome();

          // Send confirmation email:
          email = new Email(
            emailConfig,
            `${process.env.PRODUCTION_URL}auth/email?token=${token}`
          );

          await email.sendEmailConfirmation();

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
      }

      if (trigger === 'update') {
        await dbConnect();
        const user = await User.findById(token._id);

        token.fullName = user.fullName;
        token.username = user.username;
        token.email = user.email;
        token.profilePicture = user.profilePicture;
      }

      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user._id = token._id;
      session.user.fullName = token.fullName;
      session.user.username = token.username;
      session.user.email = token.email;
      session.user.profilePicture = token.profilePicture;

      return session;
    }
  }
};

export default config;
