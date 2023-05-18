import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { LoaderIcon } from '../icons/LoaderIcon';

type Sizes = 'lg';
type ButtonSizes = Record<Sizes, string>;

const sizes: ButtonSizes = {
  lg: 'px-6 h-12 font-600',
};

type ButtonProps = {
  size?: Sizes;
  loading?: boolean;
  fullWidth?: boolean;
} & ComponentPropsWithoutRef<'button'>;

export const Button = ({
  children,
  size = 'lg',
  loading,
  fullWidth,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        'relative rounded-md flex items-center justify-center uppercase shadow bg-violet-500 active:bg-violet-900',
        'text-gray-50 transition-all active:(translate-y-0.5 scale-99) hover:(scale-103 shadow-md)',
        { 'pointer-events-none opacity-70': loading },
        { 'w-full': fullWidth },
        sizes[size],
        className,
      )}
      {...props}
    >
      <span
        className={clsx('inline-flex items-center gap-1', {
          invisible: loading,
        })}
      >
        {children}
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
