import { useQuery } from '@tanstack/react-query';
import { getAllDonations } from '@/api/donation';
import toast from '@/services/toast';

const DONATIONS_QUERY_KEY = 'listDonations';

export const useQueryDonations = (enabled: boolean) => {
  return useQuery({
    queryFn: getAllDonations,
    queryKey: [DONATIONS_QUERY_KEY],
    select: (data) => data.data.map((donation) => donation.donation),
    onError: () =>
      toast.error('Falha ao buscar as doações, por favor tente novamente.'),
    enabled,
  });
};
