import { SvgIcon, SvgIconPropsWithoutChildren } from '@/components/SvgIcon';

export const X = ({ ...props }: SvgIconPropsWithoutChildren) => {
  return (
    <SvgIcon {...props}>
      <path d='M18 6L6 18M6 6l12 12' />
    </SvgIcon>
  );
};
