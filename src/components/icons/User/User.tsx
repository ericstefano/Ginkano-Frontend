import { SvgIcon, SvgIconPropsWithoutChildren } from '@/components/SvgIcon';

export const User = ({ ...props }: SvgIconPropsWithoutChildren) => {
  return (
    <SvgIcon {...props}>
      <circle cx='12' cy='8' r='5' />
      <path d='M20 21a8 8 0 10-16 0' />
    </SvgIcon>
  );
};
