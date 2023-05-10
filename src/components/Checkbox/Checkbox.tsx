import * as RadixCheckbox from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import { ReactNode, useId } from 'react';
import { Check } from '../icons/Check';

type CheckboxProps = {
  label: ReactNode;
  error?: boolean;
  description?: string;
} & RadixCheckbox.CheckboxProps;

export const Checkbox = ({
  label,
  id: htmlId,
  className,
  required,
  error,
  description,
  ...props
}: CheckboxProps) => {
  const reactId = useId();

  const id = `${htmlId}-${reactId}`;
  return (
    <div className={className}>
      <div className='flex items-center gap-2'>
        <RadixCheckbox.Root
          id={id}
          className='bg-white h-6 w-6 rounded-md hover:bg-violet-100 focus:bg-violet-100 transition-all duration-75 active:(scale-99 bg-violet-200) hover:(scale-102 shadow-md)'
          {...props}
        >
          <RadixCheckbox.Indicator className='flex items-center justify-center'>
            <Check className='h-4 w-4' />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        <label
          htmlFor={id}
          className='text-gray-50 font-500 text-sm select-none'
        >
          {label} <span className='text-red-300'>{required ? '*' : null}</span>
        </label>
      </div>
      {description ? (
        <span
          className={clsx('text-xs select-none', {
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
};
