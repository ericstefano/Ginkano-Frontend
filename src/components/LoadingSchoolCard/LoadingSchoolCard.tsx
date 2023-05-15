import { ComponentPropsWithoutRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { BaseCard } from '../BaseCard';

export type LoadingSchoolCardProps = ComponentPropsWithoutRef<'div'>;

export const LoadingSchoolCard = ({ ...props }: LoadingSchoolCardProps) => {
  return (
    <BaseCard.Root {...props}>
      <Skeleton height='12rem' borderRadius='0.75rem' className='h-48 mb-2' />
      <BaseCard.Description>
        <BaseCard.Title>
          <Skeleton />
          <Skeleton width='8rem' />
        </BaseCard.Title>
        <BaseCard.Subtitle>
          <Skeleton count={2} />
        </BaseCard.Subtitle>
      </BaseCard.Description>
    </BaseCard.Root>
  );
};
