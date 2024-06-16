import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidations } from '../user/user.validation';
import { AuthControllers } from './auth.controller';
import { LoginValidations } from './auth.validation';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(UserValidations.createUserSchemaValidation),
  AuthControllers.createSignUp,
);
router.post(
  '/login',
  validateRequest(LoginValidations.createLoginSchemaValidation),
  AuthControllers.loginUser,
);

export const AuthRoutes = router;
