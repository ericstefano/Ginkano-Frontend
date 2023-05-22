import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  UpdateGroupFormData,
  updateGroupFormSchema,
} from './UpdateGroupForm.schema';
import { Button, Input } from '@/components';

type UpdateGroupFormProps = {
  onSubmit: (data: UpdateGroupFormData) => void;
  defaultValues: UpdateGroupFormData;
  loading?: boolean;
};
export const UpdateGroupForm = ({
  onSubmit,
  defaultValues,
  loading,
}: UpdateGroupFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateGroupFormData>({
    resolver: zodResolver(updateGroupFormSchema),
    defaultValues,
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
        <Button size='sm' loading={loading}>
          Enviar
        </Button>
      </div>
    </form>
  );
};
