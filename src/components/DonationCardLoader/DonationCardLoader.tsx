import 'react-loading-skeleton/dist/skeleton.css';
import { ComponentPropsWithoutRef, Fragment } from 'react';
import Skeleton from 'react-loading-skeleton';
import { BaseCard } from '../BaseCard';

export type DonationCardLoader = {
  quantity?: number;
} & ComponentPropsWithoutRef<'div'>;

export const DonationCardLoader = ({
  quantity = 1,
  ...props
}: DonationCardLoader) => (
  <Fragment>
    {Array.from(Array(quantity), (_element, index) => (
      <BaseCard.Root key={index}>
        <BaseCard.Container
          data-testid='loader'
          className='pointer-events-none w-90'
          {...props}
        >
          <Skeleton
            height='12rem'
            borderRadius='0.75rem'
            className='h-48 mb-2'
          />
          <BaseCard.Description>
            <div className='flex gap-4'>
              <BaseCard.Subtitle>
                <Skeleton count={2} height='1.25rem' width='5.5rem' />
              </BaseCard.Subtitle>
              <BaseCard.Subtitle>
                <Skeleton count={2} height='1.25rem' width='5.5rem' />
              </BaseCard.Subtitle>
              <BaseCard.Subtitle>
                <Skeleton count={2} height='1.25rem' width='5.5rem' />
              </BaseCard.Subtitle>
            </div>
          </BaseCard.Description>
        </BaseCard.Container>
      </BaseCard.Root>
    ))}
  </Fragment>
);
