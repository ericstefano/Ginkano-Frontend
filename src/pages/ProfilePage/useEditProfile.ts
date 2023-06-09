import { useMutation } from '@tanstack/react-query';
import { editUser } from '@/api/user';
import toast from '@/services/toast';
import { queryClient } from '@/providers';
import { useAuthContext, USER_QUERY_KEY } from '@/contexts/auth';
import { getItem } from '@/services/localStorage';
import { LOCALSTORAGE_TOKEN_KEY } from '@/constants/keys';

export const useEditProfile = (onSettled: () => void) => {
  const { logout } = useAuthContext();
  const localToken = getItem(LOCALSTORAGE_TOKEN_KEY);

  return useMutation({
    mutationFn: editUser,
    onSettled,
    onError: () =>
      toast.error('Falha ao editar o usuário, por favor tente novamente.'),
    onSuccess: () => {
      queryClient.invalidateQueries([USER_QUERY_KEY, localToken]);
      logout();
      toast.success('Dados alterados com sucesso, por favor logue novamente.');
    },
  });
};
