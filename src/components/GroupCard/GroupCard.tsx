import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { BaseCard } from '../BaseCard';
import { Edit } from '../icons/Edit';
import { Trash } from '../icons/Trash';

export type GroupCardProps = {
  title: string;
  subtitle?: ReactNode;
  to?: string;
  src: string;
  alt: string;
  onUpdateButtonClick: () => void;
  onDeleteButtonClick: () => void;
} & ComponentPropsWithoutRef<'div'>;

export const GroupCard = ({
  src,
  alt,
  to,
  title,
  className,
  onUpdateButtonClick,
  onDeleteButtonClick,
  subtitle,
  ...props
}: GroupCardProps) => {
  const LinkOrDiv = to ? Link : 'div';

  return (
    <BaseCard.Root className={className}>
      <LinkOrDiv to={to as string}>
        <BaseCard.Container
          className='hover:(shadow-sm scale-100.5)'
          {...props}
        >
          <BaseCard.Image src={src} alt={alt} />
          <BaseCard.Description>
            <BaseCard.Title>{title}</BaseCard.Title>
            {subtitle ? (
              <BaseCard.Subtitle>{subtitle}</BaseCard.Subtitle>
            ) : null}
          </BaseCard.Description>
        </BaseCard.Container>
      </LinkOrDiv>
      <BaseCard.FloatButton
        className='top-2 right-13 bg-red-400'
        onClick={onDeleteButtonClick}
      >
        <Trash className='h-5 w-5' />
      </BaseCard.FloatButton>
      <BaseCard.FloatButton
        className='top-2 right-2 bg-violet-400'
        onClick={onUpdateButtonClick}
      >
        <Edit className='h-5 w-5' />
      </BaseCard.FloatButton>
    </BaseCard.Root>
  );
};
