import clsx from 'clsx';
import toast, { Toast as ToastType } from 'react-hot-toast';
import { X } from '../icons/X';

export type Colors = 'success' | 'error';
type ToastColors = Record<Colors, string>;
const toastColors: ToastColors = {
  success: 'bg-green-500',
  error: 'bg-red-500',
};

type ToastProps = { t: ToastType; message: string; color: Colors };

export const Toast = ({ t, message, color }: ToastProps) => {
  return (
    <div
      className={clsx(
        toastColors[color],
        { 'animate-slide-in-up animate-duration-100': t.visible },
        {
          'animate-slide-out-down animate-duration-500 animate-delay-0 invisible opacity-0 hidden duration-500':
            !t.visible,
        },
        'max-w-md w-full transition-all select-none',
        'shadow-lg rounded-lg pointer-events-auto flex ring-1 items-center ring-black ring-opacity-5',
      )}
      role={t.ariaProps.role}
      aria-live={t.ariaProps['aria-live']}
      // todo: when testing, getting by role alert is not working
    >
      <div className='flex-1 w-0 p-2'>
        <div className='flex items-start'>
          <div className='px-3 <lg:px-1.5 flex-1'>
            <p className='font-medium text-white <lg:text-sm'>{message}</p>
          </div>
        </div>
      </div>
      <div className='flex border-l-2 border-gray-200'>
        <button
          type='button'
          onClick={() => toast.dismiss(t.id)}
          className='w-full border text-white border-transparent transition-all rounded-none rounded-r-lg p-4 <lg:p-3 flex items-center justify-center font-medium  hover:text-green-100 focus:outline-none'
        >
          <X className='h-6 w-6 <lg:(h-5 w-5)' />
        </button>
      </div>
    </div>
  );
};
