import { useMutation } from '@tanstack/react-query';
import { LIST_GROUPS_QUERY_KEY } from './useQueryGroups';
import { createGroup } from '@/api/group';
import toast from '@/services/toast';
import { queryClient } from '@/providers';

export const useCreateGroup = () => {
  return useMutation({
    mutationFn: createGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [LIST_GROUPS_QUERY_KEY] });
    },
    onError: () =>
      toast.error('Falha ao criar o grupo, por favor tente novamente.'),
  });
};
