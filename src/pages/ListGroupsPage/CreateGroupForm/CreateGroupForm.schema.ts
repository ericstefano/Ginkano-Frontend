import { z } from 'zod';

export const createGroupFormSchema = z.object({
  nome: z.string().trim(),
  endereco: z.string().trim(),
});

export type CreateGroupFormData = z.infer<typeof createGroupFormSchema>;
