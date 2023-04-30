import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

type HeaderProps = ComponentPropsWithoutRef<'header'>;

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header
      className={clsx('h-12 bg-violet-700 p-2', className)}
      {...props}
    ></header>
  );
};
