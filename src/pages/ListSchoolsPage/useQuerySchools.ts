import { useQuery } from '@tanstack/react-query';
import { getSchools } from '@/api/user';
import toast from '@/services/toast';

export const LIST_SCHOOLS_QUERY_KEY = 'listSchools';

export const useQuerySchools = () => {
  return useQuery({
    retry: 0,
    queryKey: [LIST_SCHOOLS_QUERY_KEY],
    queryFn: getSchools,
    onError: () =>
      toast.error('Erro ao buscar as escolas, por favor, tente novamente!'),
    select: (data) => data.data.map((school) => school.school),
  });
};
