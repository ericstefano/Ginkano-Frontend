import clsx from 'clsx';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

type CardRootProps = ComponentPropsWithoutRef<'div'>;
const CardRoot = ({ children, className, ...props }: CardRootProps) => {
  return (
    <div className={clsx('relative group', className)} {...props}>
      {children}
    </div>
  );
};

type CardContainerProps = ComponentPropsWithoutRef<'div'>;
const CardContainer = ({
  className,
  children,
  ...props
}: CardContainerProps) => {
  return (
    <div
      className={clsx(
        'rounded-3 w-xs border border-2 p-4 transition-all select-none h-full',
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
    <div className={clsx('h-48 mb-2', className)}>
      <img
        className='rounded-3 h-full w-full border object-cover'
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

type CardFloatButtonProps = ComponentPropsWithoutRef<'button'>;
const CardFloatButton = ({
  className,
  children,
  ...props
}: CardFloatButtonProps) => {
  return (
    <button
      className={clsx(
        'h-10 w-10 absolute text-white',
        'shadow-sm rounded-3xl p-1',
        'group-hover:flex hidden animate-fade-in',
        'animate-duration-100 items-center justify-center',
        'active:(scale-92 shadow-md) transition-all duration-75 z-10',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const BaseCard = {
  Root: CardRoot,
  Container: CardContainer,
  Image: CardImage,
  Description: CardDescription,
  Title: CardTitle,
  Subtitle: CardSubtitle,
  FloatButton: CardFloatButton,
};
