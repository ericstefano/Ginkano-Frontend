import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  CreateDonationFormData,
  createDonationFormSchema,
} from './CreateDonationForm.schema';
import { Button, Input } from '@/components';

type CreateDonationFormProps = {
  onSubmit: (data: CreateDonationFormData) => void;
  loading: boolean;
};

export const CreateDonationForm = ({
  onSubmit,
  loading,
}: CreateDonationFormProps) => {
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
        description={errors.doador?.message}
        error={!!errors.doador}
        {...register('doador')}
      />
      <Input
        label='Quantidade'
        className='mb-2'
        variant='secondary'
        description={errors.quantidade?.message}
        error={!!errors.quantidade}
        {...register('quantidade')}
      />
      <Input
        label='Pontuação'
        className='mb-4'
        variant='secondary'
        description={errors.pontos?.message}
        error={!!errors.pontos}
        {...register('pontos')}
      />
      <Button size='sm' className='ml-auto' loading={loading}>
        Enviar
      </Button>
    </form>
  );
};
