import { useMutation } from '@tanstack/react-query';
import { LIST_GROUPS_QUERY_KEY } from './useQueryGroups';
import { editGroup } from '@/api/group';
import toast from '@/services/toast';
import { queryClient } from '@/providers';

export const useUpdateGroup = (onSettled: () => void) => {
  return useMutation({
    mutationFn: editGroup,
    onMutate: (group) => {
      const previousGroups = queryClient.getQueryData([LIST_GROUPS_QUERY_KEY]);
      queryClient.setQueryData([LIST_GROUPS_QUERY_KEY], (old) => {
        return {
          data: old.data.map((element) => {
            if (element.group.token !== group.token) return element;
            return { group };
          }),
        };
      });
      return { previousGroups };
    },
    onError: (_err, _data, context) => {
      queryClient.setQueryData(
        [LIST_GROUPS_QUERY_KEY],
        context?.previousGroups,
      );
      toast.error('Falha ao editar o grupo, por favor tente novamente.');
    },
    onSettled,
  });
};
