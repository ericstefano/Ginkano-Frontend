import { SvgIcon, SvgIconPropsWithoutChildren } from '@/components/SvgIcon';

export const ArrowLeft = ({ ...props }: SvgIconPropsWithoutChildren) => {
  return (
    <SvgIcon {...props}>
      <path d='M19 12H5M12 19l-7-7 7-7' />
    </SvgIcon>
  );
};
