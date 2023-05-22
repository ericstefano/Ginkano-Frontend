import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CreateGroupFormData,
  createGroupFormSchema,
} from './CreateGroupForm.schema';
import { Button, Input } from '@/components';

type CreateGroupFormProps = {
  onSubmit: (data: CreateGroupFormData) => void;
  loading?: boolean;
};
export const CreateGroupForm = ({
  onSubmit,
  loading,
}: CreateGroupFormProps) => {
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
        error={!!errors.nome}
        description={errors.nome?.message}
        {...register('nome')}
      />
      <Input
        label='Endereço'
        className='mb-4'
        variant='secondary'
        error={!!errors.endereco}
        description={errors.endereco?.message}
        {...register('endereco')}
      />
      <div className='flex justify-end'>
        <Button size='sm' loading={loading}>
          Criar
        </Button>
      </div>
    </form>
  );
};
