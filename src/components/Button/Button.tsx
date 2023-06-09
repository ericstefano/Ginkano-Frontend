import clsx from 'clsx';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { LoaderIcon } from '../icons/LoaderIcon';

type Sizes = 'sm' | 'md' | 'lg';
type ButtonSizes = Record<Sizes, string>;
type Colors = 'primary' | 'error' | 'success';
type Variants = 'filled' | 'outlined' | 'subtle';
type ButtonVariants = Record<Variants, Record<Colors, string>>;

const sizes: ButtonSizes = {
  sm: 'px-3 h-9',
  md: 'px-5 h-10 uppercase',
  lg: 'px-6 h-12 font-600 uppercase',
};

const variants: ButtonVariants = {
  filled: {
    primary:
      'bg-violet-500 border-violet-500 active:(bg-violet-900 border-violet-900) text-gray-50',
    success:
      'bg-green-500 border-green-500 active:(bg-green-900 border-green-900) text-gray-50',
    error:
      'bg-red-500 border-red-500 active:(bg-red-900 border-red-900) text-gray-50',
  },
  outlined: {
    primary:
      'border-violet-500 text-violet-500 active:(border-violet-900 text-violet-900 bg-violet-50) ',
    success:
      'border-green-500 text-green-500 active:(border-green-900 text-green-900 bg-green-50) ',
    error:
      'border-red-500 text-red-500 active:(border-red-900 text-red-900 bg-red-50) ',
  },
  subtle: {
    primary:
      'active:(text-violet-900 bg-violet-50) text-violet-500 border-transparent',
    success:
      'active:(text-green-900 bg-green-50) text-green-500 border-transparent',
    error: 'active:(text-red-900 bg-red-50) text-red-500 border-transparent',
  },
};

type ButtonProps = {
  size?: Sizes;
  variant?: Variants;
  color?: Colors;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

export const Button = ({
  children,
  size = 'lg',
  variant = 'filled',
  color = 'primary',
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
        'relative rounded-md flex items-center justify-center shadow-sm border whitespace-nowrap',
        'transition-all active:(translate-y-0.5 scale-99) hover:(scale-103 shadow)',
        { 'pointer-events-none opacity-70': loading },
        { 'w-full': fullWidth },
        variants[variant][color],
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
