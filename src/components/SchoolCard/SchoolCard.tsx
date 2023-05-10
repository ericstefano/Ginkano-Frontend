import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { BaseCard } from '../BaseCard';

export type SchoolCardProps = {
  title: string;
  subtitle?: ReactNode;
  src: string;
  alt: string;
} & ComponentPropsWithoutRef<'div'>;

export const SchoolCard = ({
  src,
  alt,
  title,
  subtitle,
  ...props
}: SchoolCardProps) => {
  return (
    <BaseCard.Root {...props}>
      <BaseCard.Image src={src} alt={alt} />
      <BaseCard.Description>
        <BaseCard.Title>{title}</BaseCard.Title>
        {subtitle ? <BaseCard.Subtitle>{subtitle}</BaseCard.Subtitle> : null}
      </BaseCard.Description>
    </BaseCard.Root>
  );
};
