import { SvgIconPropsWithoutChildren, SvgIcon } from '@/components/SvgIcon';

export const Eye = ({ ...props }: SvgIconPropsWithoutChildren) => {
  return (
    <SvgIcon {...props}>
      <path d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z' />
      <circle cx='12' cy='12' r='3' />
    </SvgIcon>
  );
};
