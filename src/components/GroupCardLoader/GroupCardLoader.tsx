import 'react-loading-skeleton/dist/skeleton.css';
import { ComponentPropsWithoutRef, Fragment } from 'react';
import Skeleton from 'react-loading-skeleton';
import { BaseCard } from '../BaseCard';

export type GroupCardLoaderProps = {
  quantity?: number;
} & ComponentPropsWithoutRef<'div'>;

export const GroupCardLoader = ({
  quantity = 1,
  ...props
}: GroupCardLoaderProps) => (
  <Fragment>
    {Array.from(Array(quantity), (_element, index) => (
      <BaseCard.Root key={index}>
        <BaseCard.Container
          data-testid='loader'
          className='pointer-events-none'
          {...props}
        >
          <Skeleton
            height='12rem'
            borderRadius='0.75rem'
            className='h-48 mb-2'
          />
          <BaseCard.Description>
            <BaseCard.Title>
              <Skeleton />
              <Skeleton width='8rem' />
            </BaseCard.Title>
            <BaseCard.Subtitle>
              <Skeleton count={2} />
            </BaseCard.Subtitle>
          </BaseCard.Description>
        </BaseCard.Container>
      </BaseCard.Root>
    ))}
  </Fragment>
);
