import { useMutation } from '@tanstack/react-query';
import { createAuth } from '@/api/user';

export const useRegisterUser = () => {
  return useMutation({ mutationFn: createAuth });
};
