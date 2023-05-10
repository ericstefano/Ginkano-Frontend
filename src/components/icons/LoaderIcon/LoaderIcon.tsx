import { SvgIcon, SvgIconPropsWithoutChildren } from '@/components/SvgIcon';

export const LoaderIcon = ({ ...props }: SvgIconPropsWithoutChildren) => {
  return (
    <SvgIcon {...props}>
      <path d='M21 12a9 9 0 11-6.219-8.56' />
    </SvgIcon>
  );
};
