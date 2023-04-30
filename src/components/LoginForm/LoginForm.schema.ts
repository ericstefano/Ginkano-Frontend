import { z } from 'zod';

export const loginFormSchema = z.object({
  username: z
    .string()
    .min(3, 'O usuário deve conter pelo menos 3 caracteres.')
    .trim(),
  password: z
    .string()
    .trim()
    .min(8, 'A senha deve conter pelo menos 8 caracteres.'),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;
