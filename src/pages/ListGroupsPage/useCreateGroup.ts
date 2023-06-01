import { useMutation } from '@tanstack/react-query';
import { LIST_GROUPS_QUERY_KEY } from './useQueryGroups';
import { createGroup } from '@/api/group';
import toast from '@/services/toast';
import { queryClient } from '@/providers';

export const useCreateGroup = (onSettled: () => void) => {
  return useMutation({
    mutationFn: createGroup,
    onSuccess: (data) => {
      queryClient.setQueryData([LIST_GROUPS_QUERY_KEY], (old) => {
        return {
          data: [...old.data, data],
        };
      });
    },
    onError: () =>
      toast.error('Falha ao criar o grupo, por favor tente novamente.'),
    onSettled,
  });
};
