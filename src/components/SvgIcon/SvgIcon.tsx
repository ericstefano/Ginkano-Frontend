import { ComponentPropsWithoutRef } from 'react';

type SvgIconProps = ComponentPropsWithoutRef<'svg'>;
export type SvgIconPropsWithoutChildren = Omit<SvgIconProps, 'children'>;

export const SvgIcon = ({ children, ...props }: SvgIconProps) => {
  return (
    <svg
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      {children}
    </svg>
  );
};
