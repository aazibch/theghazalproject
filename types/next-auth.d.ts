import NextAuth from 'next-auth';
import { DefaultJWT, JWT } from 'next-auth/jwt';

import { SessionUser, TokenUser, UserToken } from '.';

declare module 'next-auth' {
  interface Session {
    user: SessionUser;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends TokenUser {
    email: string;
  }
}
