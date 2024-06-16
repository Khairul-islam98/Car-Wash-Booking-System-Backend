import { z } from 'zod';

const createServiceValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    price: z.number({
      required_error: 'Price is required',
    }),
    duration: z.number({
      required_error: 'Duration is required',
    }),
    isDeleted: z.boolean().default(false),
  }),
});
const updateServiceValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Name is required',
      })
      .optional(),
    description: z
      .string({
        required_error: 'Description is required',
      })
      .optional(),
    price: z
      .number({
        required_error: 'Price is required',
      })
      .optional(),
    duration: z
      .number({
        required_error: 'Duration is required',
      })
      .optional(),
  }),
});

export const ServiceValidations = {
  createServiceValidationSchema,
  updateServiceValidationSchema,
};
