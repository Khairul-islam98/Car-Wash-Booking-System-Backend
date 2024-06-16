import { z } from 'zod';

const createUserSchemaValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
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
    phone: z.string({
      required_error: 'Phone is required',
    }),
    role: z.enum(['user', 'admin'], {
      required_error: 'Role is required',
    }),
    address: z.string({
      required_error: 'Address is required',
    }),
  }),
});

export const UserValidations = {
  createUserSchemaValidation,
};
