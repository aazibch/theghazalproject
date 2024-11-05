import { ObjectId } from 'mongoose';
import { ISODateString } from 'next-auth';

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
