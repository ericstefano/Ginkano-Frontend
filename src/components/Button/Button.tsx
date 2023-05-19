import clsx from 'clsx';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { LoaderIcon } from '../icons/LoaderIcon';

type Sizes = 'sm' | 'md' | 'lg';
type ButtonSizes = Record<Sizes, string>;
type Variants = 'primary' | 'error' | 'success';
type ButtonVariants = Record<Variants, string>;

const sizes: ButtonSizes = {
  sm: 'px-3 h-9',
  md: 'px-5 h-10 uppercase',
  lg: 'px-6 h-12 font-600 uppercase',
};

const variants: ButtonVariants = {
  primary: 'bg-violet-500 active:bg-violet-900',
  success: 'bg-green-500 active:bg-green-900',
  error: 'bg-red-500 active:bg-red-900',
};

type ButtonProps = {
  size?: Sizes;
  variant?: Variants;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

export const Button = ({
  children,
  size = 'lg',
  variant = 'primary',
  loading,
  leftIcon,
  rightIcon,
  fullWidth,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        'relative rounded-md flex items-center justify-center shadow',
        'text-gray-50 transition-all active:(translate-y-0.5 scale-99) hover:(scale-103 shadow-md)',
        { 'pointer-events-none opacity-70': loading },
        { 'w-full': fullWidth },
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      <span
        className={clsx('inline-flex items-center gap-1.5', {
          invisible: loading,
        })}
      >
        {leftIcon ? leftIcon : null}
        {children}
        {rightIcon ? rightIcon : null}
      </span>
      {loading ? (
        <LoaderIcon
          data-testid='loader'
          className={clsx('absolute h-6 w-6', { 'animate-spin': loading })}
        />
      ) : null}
    </button>
  );
};
