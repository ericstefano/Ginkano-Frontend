import { z } from 'zod';

export const updateGroupFormSchema = z.object({
  nome: z.string().nonempty('O campo deve ser preenchido.').trim(),
  endereco: z.string().nonempty('O campo deve ser preenchido.').trim(),
});

export type UpdateGroupFormData = z.infer<typeof updateGroupFormSchema>;
