import { z } from 'zod';

export const editProfileFormSchema = z.object({
  firstname: z.string().nonempty('O campo deve ser preenchido.').trim(),
  lastname: z.string().nonempty('O campo deve ser preenchido.').trim(),
  username: z.string().nonempty('O campo deve ser preenchido.').trim(),
});

export type EditProfileFormData = z.infer<typeof editProfileFormSchema>;
