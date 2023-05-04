import clsx from 'clsx';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

type CardRootProps = ComponentPropsWithoutRef<'div'>;
const CardRoot = ({ className, children, ...props }: CardRootProps) => {
  return (
    <div
      className={clsx(
        'rounded-3 w-xs border border-2 p-4 transition-all hover:(shadow-sm scale-101) select-none',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

type CardImageProps = { src: string; alt: string; className?: string };
const CardImage = ({ src, alt, className }: CardImageProps) => {
  return (
    <div className={clsx('rounded-3 h-48 mb-2', className)}>
      <img
        className='rounded-3 h-full w-full border'
        draggable={false}
        src={src}
        alt={alt}
      />
    </div>
  );
};

type CardTitleProps = { children: ReactNode; className?: string };
const CardTitle = ({ children, className }: CardTitleProps) => {
  return (
    <p className={clsx('text-lg font-600 leading-6 mb-1', className)}>
      {children}
    </p>
  );
};

type CardSubtitleProps = { children: ReactNode; className?: string };
const CardSubtitle = ({ children, className }: CardSubtitleProps) => {
  return <p className={clsx('text-sm font-400', className)}>{children}</p>;
};

type CardDescriptionProps = { children: ReactNode; className?: string };
const CardDescription = ({ children, className }: CardDescriptionProps) => {
  return <div className={clsx('px-2', className)}>{children}</div>;
};

export const BaseCard = {
  Root: CardRoot,
  Image: CardImage,
  Description: CardDescription,
  Title: CardTitle,
  Subtitle: CardSubtitle,
};
