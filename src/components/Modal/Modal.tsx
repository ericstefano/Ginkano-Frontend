import * as Dialog from '@radix-ui/react-dialog';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { X } from '../icons';

type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children?: ReactNode;
  className?: string;
};
export const Modal = ({
  open,
  title,
  children,
  className,
  onOpenChange,
}: ModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={clsx(
            'bg-black bg-opacity-50 backdrop-blur-sm fixed inset-0 z-20 transition-all animate-fade-in animate-duration-100 duration-100',
            className,
          )}
        />
        <div className='w-full h-full fixed z-20 flex flex-col items-center justify-center top-1/2 left-1/2 fixed -translate-1/2 z-20 px-6'>
          <Dialog.Content className='bg-white px-6 py-4 rounded-4 min-w-lg <sm:flex <sm:flex-col <sm:min-w-full transition-all animate-fade-in animate-duration-100 duration-100'>
            <div className='flex justify-between items-center mb-3'>
              <Dialog.Title className='text-3xl font-bold'>
                {title}
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className='p-2'>
                  <X className='h-6 w-6' />
                </button>
              </Dialog.Close>
            </div>
            {children}
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
