import { SvgIcon, SvgIconPropsWithoutChildren } from '@/components/SvgIcon';

export const Share = ({ ...props }: SvgIconPropsWithoutChildren) => {
  return (
    <SvgIcon {...props}>
      <path d='M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13' />
    </SvgIcon>
  );
};
