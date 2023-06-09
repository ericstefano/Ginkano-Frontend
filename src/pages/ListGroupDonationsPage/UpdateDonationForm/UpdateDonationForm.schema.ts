import { z } from 'zod';

export const updateDonationFormSchema = z.object({
  item: z
    .string()
    .nonempty('O campo deve ser preenchido.')
    .regex(/^[\p{L}\s]+$/u, 'O campo deve conter somente letras.')
    .toLowerCase()
    .trim(),
  doador: z
    .string()
    .nonempty('O campo deve ser preenchido.')
    .regex(/^[\p{L}\s]+$/u, 'O campo deve conter somente letras.')
    .toLowerCase()
    .trim(),
  quantidade: z.coerce
    .number({
      errorMap: () => ({ message: 'O campo deve ser um número.' }),
    })
    .gt(0, 'O campo deve ser maior que zero.'),
  pontos: z.coerce
    .number({
      errorMap: () => ({ message: 'O campo deve ser um número.' }),
    })
    .gt(0, 'O campo deve ser maior que zero.'),
});

export type UpdateDonationFormData = z.infer<typeof updateDonationFormSchema>;
