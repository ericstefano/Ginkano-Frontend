import { z } from 'zod';

export const createGroupFormSchema = z.object({
  nome: z.string().nonempty('O campo deve ser preenchido.').trim(),
  endereco: z.string().nonempty('O campo deve ser preenchido.').trim(),
});

export type CreateGroupFormData = z.infer<typeof createGroupFormSchema>;
