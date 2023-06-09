import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  EditProfileFormData,
  editProfileFormSchema,
} from './EditProfileForm.schema';
import { Button, Input } from '@/components';
import { User } from '@/types';

type EditProfileFormProps = {
  onSubmit: (data: EditProfileFormData) => void;
  user: User;
  loading: boolean;
};
export const EditProfileForm = ({
  onSubmit,
  user,
  loading,
}: EditProfileFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileFormData>({
    resolver: zodResolver(editProfileFormSchema),
    defaultValues: {
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
    },
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label='Nome'
        className='mb-2'
        variant='secondary'
        description={errors.firstname?.message}
        error={!!errors.firstname}
        {...register('firstname')}
      />
      <Input
        label='Sobrenome'
        className='mb-2'
        variant='secondary'
        description={errors.lastname?.message}
        error={!!errors.lastname}
        {...register('lastname')}
      />
      <Input
        label='Usuário'
        className='mb-4'
        variant='secondary'
        description={errors.username?.message}
        error={!!errors.username}
        {...register('username')}
      />
      <Button size='sm' className='ml-auto' loading={loading}>
        Enviar
      </Button>
    </form>
  );
};
