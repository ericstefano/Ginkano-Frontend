import { useMutation } from '@tanstack/react-query';
import { createAuth } from '@/api/user';
import { toast } from '@/services/toast';

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: createAuth,
    onSuccess: () => toast.success('Usuário registrado com sucesso!'),
  });
};
