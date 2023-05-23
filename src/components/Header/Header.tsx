import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { Link } from 'react-router-dom';
import { DropdownMenu } from '../DropdownMenu';
import { LogoType } from '../icons/LogoType';

type HeaderProps = ComponentPropsWithoutRef<'header'>;

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header
      className={clsx(
        'h-14 bg-violet-700 py-2 flex justify-center items-center sticky top-0 z-20 shadow-sm ',
        className,
      )}
      {...props}
    >
      <nav className='max-w-6xl w-full flex justify-between px-6 lg:px-12'>
        <Link to='/'>
          <LogoType className='h-12 w-20 text-white fill-white' />
        </Link>
        <DropdownMenu />
      </nav>
    </header>
  );
};
