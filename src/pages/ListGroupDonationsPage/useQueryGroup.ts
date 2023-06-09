import { useQuery } from '@tanstack/react-query';
import { getGroupByToken } from '@/api/group';
import { User } from '@/types';
import toast from '@/services/toast';

export const GROUP_QUERY_KEY = 'group';

export const useQueryGroup = (token: string, user: User) => {
  return useQuery({
    queryFn: () => getGroupByToken({ token }),
    queryKey: [GROUP_QUERY_KEY, token],
    enabled: !!token,
    onError: () => {
      if (!user) {
        toast.error('Grupo não encontrado, por favor tente novamente.');
      }
    },
    retry: 0,
  });
};
