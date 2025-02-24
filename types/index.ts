import { ISODateString, RequestInternal } from 'next-auth';
import { ObjectId } from 'mongoose';

export interface IUser {
  _id: string | ObjectId;
  __v: number;
  fullName: string;
  username: string;
  email: string;
  emailConfirmed: boolean;
  profilePicture: string;
  password: string;
  passwordChangeDate?: Date;
  passwordResetToken: string;
  passwordResetTokenExpirationDate: Date;
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

export interface SessionUser {
  _id: string;
  fullName: string;
  username: string;
  email: string;
  profilePicture: string;
  emailConfirmed: boolean;
}

export interface TokenUser {
  _id: string;
  fullName: string;
  username: string;
  email: string;
  emailConfirmed: boolean;
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
