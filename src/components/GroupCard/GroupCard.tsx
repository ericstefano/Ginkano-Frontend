import { ComponentPropsWithoutRef } from 'react';
import { BaseCard } from '../BaseCard';

export type GroupCardProps = {
  title: string;
  points: number;
  src: string;
  alt: string;
} & ComponentPropsWithoutRef<'div'>;

export const GroupCard = ({
  src,
  alt,
  title,
  points,
  ...props
}: GroupCardProps) => {
  return (
    <BaseCard.Root {...props}>
      <BaseCard.Image src={src} alt={alt} />
      <BaseCard.Description className='flex justify-between items-center'>
        <p className='text-xl leading-6 mb-1 font-600'>{title}</p>
        <p className='text-sm text-violet-700'>{points} pontos</p>
      </BaseCard.Description>
    </BaseCard.Root>
  );
};
