import { useMutation } from '@tanstack/react-query';
import { LIST_DONATIONS_QUERY_KEY } from './useQueryDonations';
import toast from '@/services/toast';
import { queryClient } from '@/providers';
import { deleteDonation } from '@/api/donation';

export const useRemoveDonation = (onSettled: () => void) => {
  return useMutation({
    mutationFn: deleteDonation,
    onMutate: (donation) => {
      const previousDonations = queryClient.getQueryData([
        LIST_DONATIONS_QUERY_KEY,
      ]);
      queryClient.setQueryData([LIST_DONATIONS_QUERY_KEY], (old) => {
        return {
          data: old.data.filter(
            (element) => element.donation.token !== donation.token,
          ),
        };
      });
      return { previousDonations };
    },
    onError: (_err, _data, context) => {
      queryClient.setQueryData(
        [LIST_DONATIONS_QUERY_KEY],
        context?.previousDonations,
      );
      toast.error('Falha ao deletar a doação, por favor tente novamente.');
    },
    onSettled,
  });
};
