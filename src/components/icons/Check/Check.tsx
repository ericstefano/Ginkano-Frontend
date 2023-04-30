import { SvgIcon, SvgIconPropsWithoutChildren } from '@/components/SvgIcon';

export const Check = ({ ...props }: SvgIconPropsWithoutChildren) => {
  return (
    <SvgIcon {...props}>
      <polyline points='20 6 9 17 4 12' />
    </SvgIcon>
  );
};
