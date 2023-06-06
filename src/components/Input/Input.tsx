import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';

type Variants = 'primary' | 'secondary';

export type InputProps = {
  label: string;
  error?: boolean;
  variant?: Variants;
  description?: string;
  leftAdornment?: ReactNode;
  rightAdornment?: ReactNode;
} & ComponentPropsWithoutRef<'input'>;

export const Input = forwardRef<HTMLInputElement | null, InputProps>(
  function Input(
    {
      className,
      description,
      label,
      error,
      required,
      leftAdornment,
      rightAdornment,
      id,
      variant = 'primary',
      ...props
    },
    ref,
  ) {
    return (
      <div className={clsx('flex flex-col', className)}>
        <label
          htmlFor={id}
          className={clsx('font-500 mb-0.5', {
            'text-gray-50': variant === 'primary',
            'text-neutral-600': variant === 'secondary',
          })}
        >
          {label}
          <span className='text-red-300'>{required ? '*' : null}</span>
        </label>
        <div className='flex mb-1 focus-within:(outline-violet-200 outline outline-2 outline-offset-2) rounded-2.5'>
          {leftAdornment ? (
            <span className='h-9 bg-neutral-100 rounded-l-2.5 flex'>
              {leftAdornment}
            </span>
          ) : undefined}
          <input
            className={clsx(
              'h-9 w-full focus:outline-none',
              {
                'rounded-l-2.5 pl-2': !leftAdornment,
                'rounded-r-2.5 pr-2': !rightAdornment,
              },
              {
                'bg-neutral-100': variant === 'primary',
                'border border-1 border-neutral-300': variant === 'secondary',
              },
            )}
            id={id}
            ref={ref}
            {...props}
          />
          {rightAdornment ? (
            <span className='h-9 bg-neutral-100 rounded-r-2.5 flex'>
              {rightAdornment}
            </span>
          ) : undefined}
        </div>
        {description ? (
          <span
            className={clsx('text-xs select-none', {
              'text-red-300': error && variant === 'primary',
              'text-violet-200': !error && variant === 'primary',
              'text-red-500': error && variant === 'secondary',
              'text-violet-900': !error && variant === 'secondary',
            })}
            role={error ? 'alert' : undefined}
          >
            {description}
          </span>
        ) : null}
      </div>
    );
  },
);
