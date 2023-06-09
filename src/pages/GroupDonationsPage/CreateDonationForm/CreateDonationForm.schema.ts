import { z } from 'zod';

export const createDonationFormSchema = z.object({
  item: z
    .string()
    .nonempty('O campo deve ser preenchido.')
    .regex(/^[\p{L}\s]+$/u, 'O campo deve conter somente letras.')
    .toLowerCase()
    .trim(),
  donator: z
    .string()
    .nonempty('O campo deve ser preenchido.')
    .regex(/^[\p{L}\s]+$/u, 'O campo deve conter somente letras.')
    .toLowerCase()
    .trim(),
  quantity: z.coerce
    .number({
      errorMap: () => ({ message: 'O campo deve ser um número.' }),
    })
    .gt(0, 'O campo deve ser maior que zero.'),
  points: z.coerce
    .number({
      errorMap: () => ({ message: 'O campo deve ser um número.' }),
    })
    .gt(0, 'O campo deve ser maior que zero.'),
});

export type CreateDonationFormData = z.infer<typeof createDonationFormSchema>;
