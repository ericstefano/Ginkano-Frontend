import { SvgIcon, SvgIconPropsWithoutChildren } from '@/components/SvgIcon';

export const FileText = ({ ...props }: SvgIconPropsWithoutChildren) => {
  return (
    <SvgIcon {...props}>
      <path d='M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z' />
      <path d='M14 2v6h6M16 13H8M16 17H8M10 9H8' />
    </SvgIcon>
  );
};
