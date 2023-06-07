import { useState } from 'react';
import { EditProfileForm } from './EditProfileForm/EditProfileForm';
import { BaseCard, Button, Modal, Section } from '@/components';
import { useAuthContext } from '@/contexts/auth';

export default function ProfilePage() {
  const { user } = useAuthContext();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Section.Root>
      <div className='mb-6 flex justify-between'>
        <Section.Subtitle>Seu perfil:</Section.Subtitle>
        <Button size='sm' onClick={() => setIsEditing(true)}>
          Editar perfil
        </Button>
      </div>

      <Section.Content>
        <BaseCard.Root>
          <BaseCard.Container className='flex gap-8'>
            <div>
              <p className='text-xl font-500'>Nome</p>
              <p className='text-lg'>{user?.firstname}</p>
            </div>

            <div>
              <p className='text-xl font-500'>Sobrenome</p>
              <p className='text-lg'>{user?.lastname}</p>
            </div>

            <div>
              <p className='text-xl font-500'>Usuário</p>
              <p className='text-lg'>{user?.username}</p>
            </div>
          </BaseCard.Container>
        </BaseCard.Root>
      </Section.Content>
      <Modal
        open={isEditing}
        onOpenChange={() => setIsEditing(false)}
        title='Editar perfil'
      >
        <EditProfileForm onSubmit={(data) => console.log(data)} user={user} />
      </Modal>
    </Section.Root>
  );
}
