import { useMutation } from '@tanstack/react-query';
import { LIST_GROUPS_QUERY_KEY } from '../ListGroupsPage/useQueryGroups';
import { LIST_DONATIONS_QUERY_KEY } from './useQueryDonations';
import { editDonation } from '@/api/donation';
import toast from '@/services/toast';
import { queryClient } from '@/providers';

export const useUpdateDonation = (onSettled: () => void) => {
  return useMutation({
    mutationFn: editDonation,

    onMutate: (donation) => {
      const previousDonations = queryClient.getQueryData([
        LIST_DONATIONS_QUERY_KEY,
      ]);
      queryClient.setQueryData([LIST_DONATIONS_QUERY_KEY], (old) => {
        return {
          data: old.data.map((element) => {
            if (element.donation.token !== donation.token) return element;
            return { donation: donation };
          }),
        };
      });
      return { previousDonations };
    },
    onError: (_err, _data, context) => {
      queryClient.setQueryData(
        [LIST_GROUPS_QUERY_KEY],
        context?.previousDonations,
      );
      toast.error('Falha ao editar a doação, por favor tente novamente.');
    },
    onSettled,
  });
};
