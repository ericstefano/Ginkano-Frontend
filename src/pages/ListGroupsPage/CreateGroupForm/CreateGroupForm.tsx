import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CreateGroupFormData,
  createGroupFormSchema,
} from './CreateGroupForm.schema';
import { Button, Input } from '@/components';

type CreateGroupFormProps = { onSubmit: () => void };
export const CreateGroupForm = ({ onSubmit }: CreateGroupFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateGroupFormData>({
    resolver: zodResolver(createGroupFormSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label='Nome'
        className='mb-2'
        variant='secondary'
        {...register('nome')}
        error={!!errors.nome}
        description={errors.nome?.message}
      />
      <Input
        label='Endereço'
        className='mb-4'
        variant='secondary'
        {...register('endereco')}
        error={!!errors.endereco}
        description={errors.endereco?.message}
      />
      <div className='flex justify-end'>
        <Button size='sm'>Criar</Button>
      </div>
    </form>
  );
};
