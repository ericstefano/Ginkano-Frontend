import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';

export type InputProps = {
  label: string;
  error?: boolean;
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
      ...props
    },
    ref,
  ) {
    return (
      <div className={clsx('flex flex-col', className)}>
        <label htmlFor={id} className='text-gray-50 font-500 mb-0.5'>
          {label}
          <span className='text-red-300'> {required ? '*' : null}</span>
        </label>
        <div className='flex mb-1'>
          {leftAdornment ? (
            <span className='h-9 bg-neutral-100 rounded-l-2.5 flex'>
              {leftAdornment}
            </span>
          ) : undefined}
          <input
            className={clsx('h-9 focus:outline-none bg-neutral-100 w-full', {
              'rounded-l-2.5 pl-2': !leftAdornment,
              'rounded-r-2.5 pr-2': !rightAdornment,
            })}
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
            className={clsx('text-xs', {
              'text-red-300': error,
              'text-violet-200': !error,
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
