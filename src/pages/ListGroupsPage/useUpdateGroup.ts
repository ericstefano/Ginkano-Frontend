import { useMutation } from '@tanstack/react-query';
import { LIST_GROUPS_QUERY_KEY } from './useQueryGroups';
import { editGroup } from '@/api/group';
import toast from '@/services/toast';
import { queryClient } from '@/providers';

export const useUpdateGroup = () => {
  return useMutation({
    mutationFn: editGroup,
    onMutate: (group) => {
      const previousGroups = queryClient.getQueryData([LIST_GROUPS_QUERY_KEY]);
      queryClient.setQueryData([LIST_GROUPS_QUERY_KEY], (old) => {
        const result = old.data.filter(
          (element) => element.group.token !== group.token,
        );
        result.push({ group: group });
        return { data: result };
      });
      return { previousGroups };
    },
    onSuccess: () => {
      toast.success('Grupo atualizado com sucesso!');
    },
    onError: (_err, _data, context) => {
      queryClient.setQueryData(
        [LIST_GROUPS_QUERY_KEY],
        context?.previousGroups,
      );
      toast.error('Falha ao editar o grupo, por favor tente novamente.');
    },
  });
};
