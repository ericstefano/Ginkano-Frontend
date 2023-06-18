import { useMutation } from '@tanstack/react-query';
import { LIST_DONATIONS_QUERY_KEY } from './useQueryDonations';
import { createDonation } from '@/api/donation';
import toast from '@/services/toast';
import { queryClient } from '@/providers';

export const useCreateDonation = (onSettled: () => void) => {
  return useMutation({
    mutationFn: createDonation,
    onSuccess: (data) => {
      queryClient.invalidateQueries([data.token, LIST_DONATIONS_QUERY_KEY]);
    },
    onError: () =>
      toast.error('Falha ao criar a doação, por favor tente novamente.'),
    onSettled,
  });
};
