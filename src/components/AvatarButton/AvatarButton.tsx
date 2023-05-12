import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { User } from '@/types';

type AvatarButtonProps = { user: User } & ComponentPropsWithoutRef<'button'>;

export const AvatarButton = forwardRef<HTMLButtonElement, AvatarButtonProps>(
  function AvatarButton({ user, ...props }, ref) {
    return (
      <button className='p-1' ref={ref} {...props}>
        <img
          className='drop-shadow-xl rounded-3xl w-9 h-9'
          src={`https://ui-avatars.com/api/?background=random&size=64&name=${user.firstname}+${user.lastname}`}
          alt='avatar-image'
        />
      </button>
    );
  },
);
