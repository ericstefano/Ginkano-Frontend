import { BaseCard } from '../BaseCard';
import { PlusCircle } from '../icons/PlusCircle';

type CreateCardProps = { title: string };

export const CreateCard = ({ title }: CreateCardProps) => {
  return (
    <BaseCard.Root className='flex-col flex justify-center items-center gap-3'>
      <PlusCircle className='h-23' />
      <p className='text-4xl text-center font-600'>{title}</p>
    </BaseCard.Root>
  );
};
