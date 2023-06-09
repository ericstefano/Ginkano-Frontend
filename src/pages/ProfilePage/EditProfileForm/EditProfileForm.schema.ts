import { z } from 'zod';

export const editProfileFormSchema = z.object({
  firstname: z.string().nonempty('O campo é obrigatório.').trim(),
  lastname: z.string().nonempty('O campo é obrigatório.').trim(),
  username: z.string().nonempty('O campo é obrigatório.').trim(),
});

export type EditProfileFormData = z.infer<typeof editProfileFormSchema>;
