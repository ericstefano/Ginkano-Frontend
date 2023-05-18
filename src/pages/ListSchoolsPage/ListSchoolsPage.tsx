import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import clsx from 'clsx';
import { useQuerySchools } from './useQuerySchools';
import { SchoolCard } from '@/components/SchoolCard';
import { useAuthContext } from '@/contexts/auth';
import { Button } from '@/components/Button';
import { PlusCircle } from '@/components/icons';
import { SchoolCardLoader } from '@/components/SchoolCardLoader';

const SchoolLoaderGroup = () => {
  return (
    <Fragment>
      <SchoolCardLoader /> <SchoolCardLoader /> <SchoolCardLoader />
    </Fragment>
  );
};

export default function ListSchoolsPage() {
  const { user } = useAuthContext();
  const { isLoading, data: schools, refetch } = useQuerySchools();
  const hasData = schools && schools.length;

  return (
    <section className='mx-auto gap-4 p-6 lg:px-12 max-w-6xl min-h-[calc(100vh-3.5rem)] flex flex-col'>
      <h1 className='text-4xl <lg:text-3xl font-semibold mb-3'>
        Boas-vindas, {user?.firstname}!
      </h1>
      <div className='flex justify-between mb-5 items-center'>
        <h2 className='text-3xl <lg:text-2xl font-semibold'>Seus grupos:</h2>
        <Button size='sm' leftIcon={<PlusCircle className='h-5 w-5' />}>
          Novo grupo
        </Button>
      </div>
      <div
        className={clsx(
          'flex gap-6 flex-wrap <lg:justify-center items-stretch',
          {
            'flex-1': !hasData && !isLoading,
          },
        )}
      >
        {isLoading ? (
          <SchoolLoaderGroup />
        ) : hasData ? (
          schools.map((school) => (
            <Link to={`/school/${school.token}`} key={school.token}>
              <SchoolCard
                title={school.nome}
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                alt='placeholder'
                subtitle={school.endereco}
              />
            </Link>
          ))
        ) : (
          <div className='flex flex-1 items-center justify-center flex-col gap-4'>
            <p className='text-4xl italic text-gray-700 text-center'>
              Nenhuma escola encontrada
            </p>
            <Button size='md' onClick={() => refetch()}>
              Buscar novamente
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
