import { useQuery } from '@tanstack/react-query';
import toast from '@/services/toast';
import { getAllGroups } from '@/api/group';

export const LIST_GROUPS_QUERY_KEY = 'listGroups';

export const useQuerySchools = () => {
  return useQuery({
    retry: 0,
    queryKey: [LIST_GROUPS_QUERY_KEY],
    queryFn: getAllGroups,
    onError: () =>
      toast.error('Erro ao buscar os grupos, por favor, tente novamente.'),
    select: (data) => data.data.map((group) => group.group),
  });
};
