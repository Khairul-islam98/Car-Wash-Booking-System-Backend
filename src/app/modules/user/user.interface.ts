/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { USER_ROLES } from './user.constant';

export interface IUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'user' | 'admin';
  address: string;
}

export interface IUserModel extends Model<IUser> {
  isUserExists(email: string): Promise<IUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}

export type IUserRole = keyof typeof USER_ROLES;
