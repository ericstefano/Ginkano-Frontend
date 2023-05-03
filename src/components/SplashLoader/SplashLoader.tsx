import clsx from 'clsx';
import { ReactNode } from 'react';

type LetterProps = { className: string; children: ReactNode };
const Letter = ({ className, children }: LetterProps) => {
  return (
    <span
      className={clsx(
        'text-7xl text-black font-bold animate-bounce-alt animate-duration-2500',
        className,
      )}
    >
      {children}
    </span>
  );
};

export const SplashLoader = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-white relative'>
      <Letter className='animate-delay-0'>G</Letter>
      <Letter className='animate-delay-50'>i</Letter>
      <Letter className='animate-delay-100'>n</Letter>
      <Letter className='animate-delay-150'>k</Letter>
      <Letter className='animate-delay-200'>a</Letter>
      <Letter className='animate-delay-250'>n</Letter>
      <Letter className='animate-delay-300'>o</Letter>
    </div>
  );
};
