import { SvgIcon, SvgIconPropsWithoutChildren } from '@/components/SvgIcon';

export const Logout = ({ ...props }: SvgIconPropsWithoutChildren) => {
  return (
    <SvgIcon {...props}>
      <path d='M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9' />
    </SvgIcon>
  );
};
