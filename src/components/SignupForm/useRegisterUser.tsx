import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { createAuth } from '@/api/user';
import { toast } from '@/services/toast';

export const useRegisterUser = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: createAuth,
    onSuccess: () => {
      toast.success('Usuário registrado com sucesso!');
      navigate('/login');
    },
    onError: (error) => {
      if (
        isAxiosError(error) &&
        error.response &&
        error.response.status >= 500
      ) {
        toast.error(error.message);
      }
    },
  });
};
