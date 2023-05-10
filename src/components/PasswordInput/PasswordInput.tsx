import { forwardRef, useState } from 'react';
import { ClosedEye, Eye } from '../icons';
import { Input, InputProps } from '../Input';

type PasswordInputProps = Omit<InputProps, 'rightAdornment' | 'type'>;

export const PasswordInput = forwardRef<
  HTMLInputElement | null,
  PasswordInputProps
>(function PasswordInput({ ...props }, ref) {
  const [isShowingPassword, setIsShowingPassword] = useState<boolean>(false);

  const handleToggleShowingPassword = () => {
    setIsShowingPassword(
      (previousIsShowingPassword) => !previousIsShowingPassword,
    );
  };

  return (
    <Input
      type={isShowingPassword ? 'text' : 'password'}
      rightAdornment={
        <button
          className='h-8 w-8 flex self-center items-center p-1 justify-center hover:bg-violet-100 focus:bg-violet-100 rounded-12 group transition mr-1 transition-all duration-75 active:(scale-99 bg-violet-200) hover:(scale-102 shadow-md)'
          onClick={handleToggleShowingPassword}
          type='button'
        >
          {isShowingPassword ? (
            <Eye className='h-6 w-6 text-violet-600 group-hover:(text-violet-800)' />
          ) : (
            <ClosedEye className='h-6 w-6 text-violet-600 group-hover:(text-violet-800)' />
          )}
        </button>
      }
      ref={ref}
      {...props}
    />
  );
});
