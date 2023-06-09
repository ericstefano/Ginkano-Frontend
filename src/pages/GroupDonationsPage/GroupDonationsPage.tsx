import { useNavigate, useParams } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { CreateDonationForm } from './CreateDonationForm/CreateDonationForm';
import { useQueryGroup } from './useQueryGroup';
import { useQueryDonations } from './useQueryDonations';
import { Button, Modal, NoDataMessage, Section } from '@/components';
import { PlusCircle } from '@/components/icons';
import { DonationCard } from '@/components/DonationCard';
import placeholderImg from '@/assets/placeholder_view.png';
import { DonationCardLoader } from '@/components/DonationCardLoader/DonationCardLoader';
import { useAuthContext } from '@/contexts/auth';
import { User } from '@/types';
import { capitalizeAll } from '@/utils/string';

export default function GroupDonationsPage() {
  const { token } = useParams();
  const { user } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);
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

  const hasDonations = !!donations;

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
            onClick={() => setIsOpen(true)}
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
                onDeleteButtonClick={() => console.log('oi')}
                onUpdateButtonClick={() => console.log('oi')}
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
        title='Nova doação'
        onOpenChange={() => setIsOpen(false)}
        open={isOpen}
      >
        <CreateDonationForm onSubmit={(data) => console.log(data)} />
      </Modal>
    </Section.Root>
  );
}
