import { SvgIcon, SvgIconPropsWithoutChildren } from '@/components/SvgIcon';

export const PlusCircle = ({ ...props }: SvgIconPropsWithoutChildren) => {
  return (
    <SvgIcon {...props}>
      <circle cx='12' cy='12' r='10' />
      <path d='M12 8v8M8 12h8' />
    </SvgIcon>
  );
};
