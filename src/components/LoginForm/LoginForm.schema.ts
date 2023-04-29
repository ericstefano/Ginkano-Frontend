import { z } from 'zod';

export const loginFormSchema = z.object({
  name: z
    .string()
    .nonempty({ message: 'O nome deve conter pelo menos um caracter.' })
    .trim(),
  password: z
    .string()
    .nonempty({ message: 'A senha deve conter pelo menos um caracter.' })
    .trim(),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;
