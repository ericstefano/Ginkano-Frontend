import QRCode from 'react-qr-code';
import { ComponentPropsWithoutRef } from 'react';
import { Input } from '@/components';
import { Group } from '@/api/group';

type ShareGroupSectionProps = {
  group: Group;
} & ComponentPropsWithoutRef<'div'>;
export const ShareGroupSection = ({
  group,
  ...props
}: ShareGroupSectionProps) => {
  const link = `${window.location.href}group/${group.token}`;

  return (
    <div {...props}>
      <Input
        variant='secondary'
        label='Token de compartilhamento'
        className='font-600 text-violet-600 mb-4'
        readOnly
        value={group.token}
      />
      <Input
        variant='secondary'
        label='Link'
        className='font-600 text-violet-600 mb-4'
        readOnly
        value={link}
      />
      <p
        className='font-500 mb-0.5
      text-neutral-600'
      >
        QR Code
      </p>
      <QRCode value={link} className='w-full h-48 mb-4' />
    </div>
  );
};
