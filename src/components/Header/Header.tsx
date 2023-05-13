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
        'h-14 bg-violet-700 py-2 px-6 flex justify-center items-center',
        className,
      )}
      {...props}
    >
      <nav className='max-w-6xl w-full flex justify-between'>
        <Link to='/'>
          <LogoType className='h-12 w-20 text-white fill-white' />
        </Link>
        <DropdownMenu />
      </nav>
    </header>
  );
};
