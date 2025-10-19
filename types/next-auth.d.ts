import NextAuth from 'next-auth';
import { DefaultJWT, JWT } from 'next-auth/jwt';

import { SessionUser, TokenUser, UserToken } from '.';

declare module 'next-auth' {
  interface Session {
    signInDate: number;
    user: SessionUser;
  }

  interface User extends SessionUser {}
}

declare module 'next-auth/jwt' {
  interface JWT extends TokenUser {
    signInDate: number;
    email: string;
  }
}
