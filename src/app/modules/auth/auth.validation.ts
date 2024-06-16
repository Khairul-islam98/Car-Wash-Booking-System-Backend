import { z } from 'zod';

const createLoginSchemaValidation = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email(),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(6)
      .max(20),
  }),
});

export const LoginValidations = {
  createLoginSchemaValidation,
};
