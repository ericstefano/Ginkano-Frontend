import { useQuery } from '@tanstack/react-query';
import { getAllDonations } from '@/api/donation';
import toast from '@/services/toast';

export const LIST_DONATIONS_QUERY_KEY = 'listDonations';

export const useQueryDonations = (token: string) => {
  return useQuery({
    queryFn: () => getAllDonations(token),
    queryKey: [token, LIST_DONATIONS_QUERY_KEY],
    select: (data) => data.donations,
    onError: () =>
      toast.error('Falha ao buscar as doações, por favor tente novamente.'),
    enabled: !!token,
  });
};
