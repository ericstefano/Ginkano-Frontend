import { z } from 'zod';

export const updateGroupFormSchema = z.object({
  nome: z.string().trim().optional(),
  endereco: z.string().trim().optional(),
});

export type UpdateGroupFormData = z.infer<typeof updateGroupFormSchema>;
