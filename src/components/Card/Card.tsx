import { ComponentPropsWithoutRef } from 'react';

export type CardProps = {
  title: string;
  description?: string;
  src: string;
  alt: string;
} & ComponentPropsWithoutRef<'div'>;

export const Card = ({ src, alt, title, description, ...props }: CardProps) => {
  return (
    <div
      className='shadow-md rounded-3 w-xs bg-violet-500 p-4 transition-all hover:(shadow-lg scale-101) select-none'
      {...props}
    >
      <div className='rounded-3 h-52 mb-2'>
        <img className='rounded-3 h-full w-full' src={src} alt={alt} />
      </div>
      <div className='px-2'>
        <div className='flex justify-between items-center text-white mb-1'>
          <p className='text-xl font-600'>{title}</p>
          {/* <p className='text-xs'>
            <span className='text-amber-300'>18000</span> pontos
          </p> */}
        </div>

        {description ? (
          <p className='text-white text-xs font-400'>
            Escola Municipal Francisco Labanca
          </p>
        ) : null}
      </div>
    </div>
  );
};
