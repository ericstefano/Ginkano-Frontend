import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

type FooterProps = ComponentPropsWithoutRef<'footer'>;

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer
      className={clsx('bg-violet-700 h-xl', className)}
      {...props}
    ></footer>
  );
};
