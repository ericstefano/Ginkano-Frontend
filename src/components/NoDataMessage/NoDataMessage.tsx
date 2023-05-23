import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { Button } from '../Button';

type NoDataMessageProps = {
  loading: boolean;
  message: string;
  onRetryButtonClick: () => void;
} & ComponentPropsWithoutRef<'div'>;
export const NoDataMessage = ({
  loading,
  className,
  message,
  onRetryButtonClick,
  ...props
}: NoDataMessageProps) => {
  const handleOnClick = () => {
    onRetryButtonClick();
  };
  return (
    <div
      className={clsx(
        'flex flex-1 items-center justify-center flex-col gap-4',
        className,
      )}
      {...props}
    >
      <p className='text-4xl <lg:text-3xl italic text-gray-700 text-center'>
        {message}
      </p>
      <Button size='md' onClick={handleOnClick} loading={loading}>
        Buscar novamente
      </Button>
    </div>
  );
};
