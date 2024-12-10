import { ISODateString, RequestInternal } from 'next-auth';
import { ObjectId } from 'mongoose';

export interface IUser {
  _id: string | ObjectId;
  __v: number;
  fullName: string;
  username: string;
  email: string;
  profilePicture: string;
  password: string;
  passwordChangeDate?: Date;
  bio?: string;
  laureateTitle?: string;
  couplets: ObjectId[];
}

export interface IColGhazalEntry {
  _id: string | ObjectId;
  __v: number;
  user: ObjectId | IUser;
  couplet: [string, string];
  approved: boolean;
  createdAt: string;
  updatedAt: string;
}

interface SessionSpecific {
  expires: ISODateString;
}

export interface UserSession extends SessionSpecific {
  user: {
    _id: string;
    fullName: string;
    username: string;
    email: string;
    profilePicture: string;
    image?: string;
    name?: string;
  };
}

interface JwtSpecific {
  iat: number;
  exp: number;
  jti: string;
}

export interface UserToken extends JwtSpecific {
  _id: string;
  fullName: string;
  username: string;
  email: string;
  profilePicture: string;
}

export type AuthRequest = Pick<
  RequestInternal,
  'body' | 'query' | 'headers' | 'method'
>;

type LoginCredentials = Record<'email' | 'password', string>;

type SignupCredentials = Record<
  'email' | 'password' | 'username' | 'fullName' | 'passwordConfirmation',
  string
>;

export type AuthCredentials = LoginCredentials | SignupCredentials | undefined;
