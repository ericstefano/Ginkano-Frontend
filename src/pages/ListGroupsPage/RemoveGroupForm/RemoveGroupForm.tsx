import { FormEvent } from 'react';
import { Button } from '@/components';

type RemoveGroupFormProps = {
  onSubmit: () => void;
  onNoButtonClick: () => void;
  loading?: boolean;
};
export const RemoveGroupForm = ({
  onNoButtonClick,
  onSubmit,
  loading,
}: RemoveGroupFormProps) => {
  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <p className='text-lg'>Você tem certeza que deseja deletar o grupo?</p>
      <p className='text-lg text-red-500 font-semibold mb-2'>
        Esta ação não pode ser desfeita
      </p>
      <div className='flex justify-end gap-2'>
        <Button size='sm' type='button' onClick={onNoButtonClick}>
          Não
        </Button>
        <Button size='sm' type='submit' variant='error' loading={loading}>
          Sim
        </Button>
      </div>
    </form>
  );
};
