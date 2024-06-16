import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { IUser } from '../user/user.interface';
import { User } from '../user/user.model';
import { ILogin } from './auth.interface';
import jwt from 'jsonwebtoken';
import config from '../../config';

const createSignUpIntoDB = async (payload: IUser) => {
  const result = await User.create(payload);
  return result;
};

const loginUser = async (payload: ILogin) => {
  const user = await User.isUserExists(payload.email);
  if (!user) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User does not exists');
  }
  if (!(await User.isPasswordMatched(payload.password, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched!');
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };
  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: config.jwt_access_expires_in as string,
  });

  return {
    accessToken,
    user,
  };
};

export const AuthServices = {
  createSignUpIntoDB,
  loginUser,
};
