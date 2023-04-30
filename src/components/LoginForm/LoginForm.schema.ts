import { z } from 'zod';

export const loginFormSchema = z.object({
  username: z
    .string()
    .nonempty('O campo deve conter pelo menos 1 caracter.')
    .trim(),
  password: z
    .string()
    .nonempty('O campo deve conter pelo menos 1 caracter.')
    .trim(),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;
