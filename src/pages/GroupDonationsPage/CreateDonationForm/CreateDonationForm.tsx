import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  CreateDonationFormData,
  createDonationFormSchema,
} from './CreateDonationForm.schema';
import { Button, Input } from '@/components';

type CreateDonationFormProps = {
  onSubmit: (data: CreateDonationFormData) => void;
};

export const CreateDonationForm = ({ onSubmit }: CreateDonationFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateDonationFormData>({
    resolver: zodResolver(createDonationFormSchema),
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label='Item'
        className='mb-2'
        variant='secondary'
        description={errors.item?.message}
        error={!!errors.item}
        {...register('item')}
      />
      <Input
        label='Doador(a)'
        className='mb-2'
        variant='secondary'
        description={errors.donator?.message}
        error={!!errors.donator}
        {...register('donator')}
      />
      <Input
        label='Quantidade'
        className='mb-2'
        variant='secondary'
        description={errors.quantity?.message}
        error={!!errors.quantity}
        {...register('quantity')}
      />
      <Input
        label='Pontuação'
        className='mb-4'
        variant='secondary'
        description={errors.points?.message}
        error={!!errors.points}
        {...register('points')}
      />
      <Button size='sm' className='ml-auto'>
        Enviar
      </Button>
    </form>
  );
};
