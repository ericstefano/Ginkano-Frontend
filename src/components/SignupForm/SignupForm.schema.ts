import { z } from 'zod';

export const registerFormSchema = z
  .object({
    firstname: z
      .string()
      .trim()
      .min(3, 'O nome deve conter pelo menos 3 caracteres.')
      .regex(/^[a-zA-Z\s]*$/, 'O nome deve conter somente letras.'), // melhorar validação para permitir somente uma palavra
    lastname: z
      .string()
      .min(3, 'O sobrenome deve conter pelo menos 3 caracteres.')
      .regex(/^[a-zA-Z\s]*$/, 'O sobrenome deve conter somente letras.') // melhorar validação para permitir somente uma palavra
      .trim(),
    username: z
      .string()
      .min(3, 'O usuário deve conter pelo menos 3 caracteres.')
      .trim(),
    password: z
      .string()
      .trim()
      .min(8, 'A senha deve conter pelo menos 8 caracteres.')
      .regex(/[0-9]/, 'A senha deve conter pelo menos 1 caracter numérico.')
      .regex(/[A-Z]/, 'A senha deve conter pelo menos 1 caracter maiúsculo.')
      .regex(
        /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
        'A senha deve conter pelo menos 1 caracter special.',
      ),
    confirm: z.string(),
    conditions: z.literal<boolean>(true),
  })
  .refine((values) => values.password === values.confirm, {
    message: 'A senha e a confirmação devem ser iguais.',
    path: ['confirm'],
  });

export type RegisterFormData = z.infer<typeof registerFormSchema>;
