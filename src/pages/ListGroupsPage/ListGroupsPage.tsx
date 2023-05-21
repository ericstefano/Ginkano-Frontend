import { Fragment } from 'react';
import { useQuerySchools } from './useQueryGroups';
import { CreateGroupForm } from './CreateGroupForm/';
import { UpdateGroupForm } from './UpdateGroupForm';
import { RemoveGroupForm } from './RemoveGroupForm/';
import {
  Button,
  NoDataMessage,
  SchoolCard,
  SchoolCardLoader,
  Section,
  Modal,
} from '@/components';
import { PlusCircle } from '@/components/icons';
import { useAuthContext } from '@/contexts/auth';
import { useCrudMachine } from '@/hooks/useCrudMachine';

const SchoolLoaderGroup = () => {
  return (
    <Fragment>
      <SchoolCardLoader /> <SchoolCardLoader /> <SchoolCardLoader />
    </Fragment>
  );
};

export default function ListGroupsPage() {
  const { user } = useAuthContext();

  const {
    state,
    isIdle,
    isCreating,
    isUpdating,
    isRemoving,
    create,
    update,
    remove,
    idle,
  } = useCrudMachine();

  const {
    isLoading,
    isRefetching,
    isSuccess,
    data: groups,
    refetch,
  } = useQuerySchools();

  const hasData = groups && groups.length;

  const currentGroup = groups?.find((group) => group.token === state.id);

  return (
    <Section.Root>
      <Section.Title>Boas-vindas, {user?.firstname}!</Section.Title>
      <div className='flex justify-between mb-6 items-center'>
        <Section.Subtitle>Seus grupos:</Section.Subtitle>
        <Button
          size='sm'
          onClick={() => create('Criar grupo')}
          leftIcon={<PlusCircle className='h-5 w-5' />}
        >
          Novo grupo
        </Button>
      </div>

      <Section.Content grow={!hasData && !isLoading}>
        {isLoading ? <SchoolLoaderGroup /> : null}

        {isSuccess && hasData
          ? groups.map((group) => (
              <SchoolCard
                to={`/group/${group.token}`}
                key={group.token}
                title={group.nome}
                subtitle={group.endereco}
                onUpdateButtonClick={() => update(group.token, 'Editar grupo')}
                onDeleteButtonClick={() => remove(group.token, 'Deletar grupo')}
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                alt='placeholder'
              />
            ))
          : null}

        {isLoading || hasData ? null : (
          <NoDataMessage
            message='Nenhum grupo encontrado'
            onRetryButtonClick={refetch}
            loading={isRefetching}
          />
        )}
      </Section.Content>

      <Modal title={state.title} open={!isIdle} onOpenChange={idle}>
        {isCreating ? <CreateGroupForm onSubmit={() => null} /> : null}
        {isUpdating ? (
          <UpdateGroupForm
            onSubmit={() => null}
            defaultValues={{
              endereco: currentGroup?.endereco,
              nome: currentGroup?.nome,
            }}
          />
        ) : null}
        {isRemoving ? (
          <RemoveGroupForm
            onSubmit={() => console.log}
            onNoButtonClick={idle}
          />
        ) : null}
      </Modal>
    </Section.Root>
  );
}
