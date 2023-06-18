import { useMutation } from '@tanstack/react-query';
import { LIST_DONATIONS_QUERY_KEY } from './useQueryDonations';
import toast from '@/services/toast';
import { queryClient } from '@/providers';
import { deleteDonation } from '@/api/donation';

export const useRemoveDonation = (onSettled: () => void) => {
  return useMutation({
    mutationFn: deleteDonation,
    onSuccess: (donation) => {
      queryClient.invalidateQueries([donation.token, LIST_DONATIONS_QUERY_KEY]);
    },
    onError: () => {
      toast.error('Falha ao deletar a doação, por favor tente novamente.');
    },
    onSettled,
  });
};
