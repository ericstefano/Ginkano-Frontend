import { useMutation } from '@tanstack/react-query';
import { LIST_DONATIONS_QUERY_KEY } from './useQueryDonations';
import { editDonation } from '@/api/donation';
import toast from '@/services/toast';
import { queryClient } from '@/providers';

export const useUpdateDonation = (onSettled: () => void) => {
  return useMutation({
    mutationFn: editDonation,
    onSuccess: (donation) => {
      queryClient.invalidateQueries([donation.token, LIST_DONATIONS_QUERY_KEY]);
    },
    onError: () => {
      toast.error('Falha ao editar a doação, por favor tente novamente.');
    },
    onSettled,
  });
};
