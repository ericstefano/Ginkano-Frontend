import { useMutation } from '@tanstack/react-query';
import { LIST_GROUPS_QUERY_KEY } from './useQueryGroups';
import { deleteGroup } from '@/api/group';
import toast from '@/services/toast';
import { queryClient } from '@/providers';

export const useRemoveGroup = () => {
  return useMutation({
    mutationFn: deleteGroup,
    onMutate: (group) => {
      const previousGroups = queryClient.getQueryData([LIST_GROUPS_QUERY_KEY]);
      queryClient.setQueryData([LIST_GROUPS_QUERY_KEY], (old) => {
        return {
          data: old.data.filter(
            (element) => element.group.token !== group.token,
          ),
        };
      });
      return { previousGroups };
    },
    onError: (_err, _data, context) => {
      queryClient.setQueryData(
        [LIST_GROUPS_QUERY_KEY],
        context?.previousGroups,
      );
      toast.error('Falha ao deletar o grupo, por favor tente novamente.');
    },
  });
};
