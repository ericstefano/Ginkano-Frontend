import { Fragment } from 'react';
import { BaseCard } from '../BaseCard';
import { Edit, Trash } from '../icons';
import { User } from '@/types';

type DonationCardProps = {
  src: string;
  alt: string;
  donationItemName: string;
  donationQuantity: number;
  donationPerson: string;
  donationPoints: number;
  user: User;
  onRemoveButtonClick: () => void;
  onUpdateButtonClick: () => void;
};
export const DonationCard = ({
  src,
  alt,
  donationItemName,
  donationQuantity,
  donationPerson,
  donationPoints,
  onRemoveButtonClick,
  onUpdateButtonClick,
  user,
}: DonationCardProps) => {
  return (
    <BaseCard.Root>
      <BaseCard.Container className='w-90'>
        <BaseCard.Image src={src} alt={alt} />
        <BaseCard.Title className='mb-3'>
          Doação de {donationItemName.toLowerCase()}
        </BaseCard.Title>
        <div className='flex gap-4'>
          <BaseCard.Subtitle>
            <span className='text-red-500 font-600'>Doador(a):</span>{' '}
            {donationPerson}
          </BaseCard.Subtitle>
          <BaseCard.Subtitle>
            <span className='text-green-500 font-600'>Quantidade:</span>{' '}
            {donationQuantity} unidade(s)
          </BaseCard.Subtitle>
          <BaseCard.Subtitle>
            <span className='text-blue-500 font-600'>Pontuação:</span>{' '}
            {donationPoints} ponto(s)
          </BaseCard.Subtitle>
        </div>
      </BaseCard.Container>
      {user ? (
        <Fragment>
          <BaseCard.FloatButton
            className='top-2 right-13 bg-red-400'
            onClick={onRemoveButtonClick}
          >
            <Trash className='h-5 w-5' />
          </BaseCard.FloatButton>
          <BaseCard.FloatButton
            className='top-2 right-2 bg-violet-400'
            onClick={onUpdateButtonClick}
          >
            <Edit className='h-5 w-5' />
          </BaseCard.FloatButton>
        </Fragment>
      ) : null}
    </BaseCard.Root>
  );
};
