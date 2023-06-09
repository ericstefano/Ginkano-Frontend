import { useNavigate, useParams } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { CreateDonationForm } from './CreateDonationForm/CreateDonationForm';
import { useQueryGroup } from './useQueryGroup';
import { useQueryDonations } from './useQueryDonations';
import { DonationMachineState, useDonationMachine } from './useDonationMachine';
import { useCreateDonation } from './useCreateDonation';
import { UpdateDonationForm } from './UpdateDonationForm/UpdateDonationForm';
import { useUpdateDonation } from './useUpdateDonation';
import { useRemoveDonation } from './useRemoveDonation';
import { RemoveDonationForm } from './RemoveDonationForm';
import { Button, Modal, NoDataMessage, Section } from '@/components';
import { PlusCircle } from '@/components/icons';
import { DonationCard } from '@/components/DonationCard';
import placeholderImg from '@/assets/placeholder_view.png';
import { DonationCardLoader } from '@/components/DonationCardLoader/DonationCardLoader';
import { useAuthContext } from '@/contexts/auth';
import { User } from '@/types';
import { capitalizeAll } from '@/utils/string';
import { Donation } from '@/api/donation';

const titleMap: Record<DonationMachineState['status'], string> = {
  idle: '',
  creating: 'Nova doação',
  updating: 'Editar doação',
  removing: 'Remover doação',
};

export default function ListGroupDonationsPage() {
  const { token } = useParams();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const {
    data: group,
    isSuccess: isGroupSuccess,
    isLoading: isGroupLoading,
  } = useQueryGroup(token as string, user as User);

  const {
    data: donations,
    isLoading: isDonationLoading,
    refetch: retryDonations,
  } = useQueryDonations(!!token);

  const {
    state,
    dispatchCreate,
    dispatchIdle,
    dispatchRemove,
    dispatchUpdate,
    isCreating,
    isIdle,
    isRemoving,
    isUpdating,
  } = useDonationMachine();

  const { mutate: createDonation, isLoading: isCreateLoading } =
    useCreateDonation(dispatchIdle);

  const { mutate: updateDonation, isLoading: isUpdateLoading } =
    useUpdateDonation(dispatchIdle);

  const { mutate: removeDonation, isLoading: isRemoveLoading } =
    useRemoveDonation(dispatchIdle);

  const hasDonations = !!donations && donations?.length;

  const currentDonation = donations?.find(
    (donation) => donation.token === state.id,
  ) as Donation;

  useLayoutEffect(() => {
    if (!token || group || isGroupSuccess || isGroupLoading) {
      return;
    }
    return navigate('/');
  }, [group, isGroupLoading, isGroupSuccess, navigate, token]);
  return (
    <Section.Root>
      <div className='flex justify-between items-center mb-6 gap-2'>
        <Section.Subtitle>
          {isGroupLoading ? (
            <Skeleton height='2.5rem' width='25rem' />
          ) : (
            group?.data?.nome
          )}
        </Section.Subtitle>
        {user ? (
          <Button
            size='sm'
            onClick={dispatchCreate}
            leftIcon={<PlusCircle className='h-5 w-5' />}
          >
            Nova doação
          </Button>
        ) : (
          <Button size='sm' onClick={() => navigate(-1)}>
            Voltar
          </Button>
        )}
      </div>
      <Section.Content
        grow={!hasDonations && !isDonationLoading}
        className='gap-6 justify-center'
      >
        {hasDonations
          ? donations.map((donation) => (
              <DonationCard
                src={placeholderImg}
                alt='placeholder'
                key={donation.token}
                donationItemName={donation.item}
                donationQuantity={donation.quantidade}
                donationPoints={donation.pontos}
                donationPerson={capitalizeAll(donation.doador)}
                onRemoveButtonClick={() => dispatchRemove(donation.token)}
                onUpdateButtonClick={() => dispatchUpdate(donation.token)}
                user={user as User}
              />
            ))
          : null}

        {isDonationLoading ? <DonationCardLoader quantity={4} /> : null}

        {isDonationLoading || hasDonations ? null : (
          <NoDataMessage
            loading={false}
            message='Nenhuma doação encontrada'
            onRetryButtonClick={retryDonations}
          />
        )}
      </Section.Content>
      <Modal
        title={titleMap[state.status]}
        onOpenChange={dispatchIdle}
        open={!isIdle}
      >
        {isCreating ? (
          <CreateDonationForm
            onSubmit={(data) => createDonation(data)}
            loading={isCreateLoading}
          />
        ) : null}

        {isUpdating ? (
          <UpdateDonationForm
            loading={isUpdateLoading}
            donation={currentDonation}
            onSubmit={(data) =>
              updateDonation({
                ...data,
                doador: capitalizeAll(data.doador),
                token: currentDonation.token,
              })
            }
          />
        ) : null}
        {isRemoving ? (
          <RemoveDonationForm
            loading={isRemoveLoading}
            onNoButtonClick={dispatchIdle}
            onSubmit={() => removeDonation(currentDonation)}
          />
        ) : null}
      </Modal>
    </Section.Root>
  );
}
