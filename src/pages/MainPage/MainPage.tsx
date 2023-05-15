import { Link } from 'react-router-dom';
import { SchoolCard } from '@/components/SchoolCard';
import { useAuthContext } from '@/contexts/auth';
import { Button } from '@/components/Button';
import { PlusCircle } from '@/components/icons';
import { LoadingSchoolCard } from '@/components/LoadingSchoolCard/LoadingSchoolCard';

export default function MainPage() {
  const { user } = useAuthContext();

  return (
    <section className='mx-auto gap-4 py-6 px-6 lg:px-12 max-w-6xl'>
      <h1 className='text-4xl <lg:text-3xl font-semibold mb-3'>
        Boas-vindas, {user?.firstname}!
      </h1>
      <span className='flex justify-between mb-5 items-center'>
        <h2 className='text-3xl <lg:text-2xl font-semibold'>Seus grupos:</h2>
        <Button size='sm' leftIcon={<PlusCircle className='h-5 w-5' />}>
          Novo grupo
        </Button>
      </span>
      <div className='flex gap-4 flex-wrap <lg:justify-center'>
        <LoadingSchoolCard />

        <Link to='/school'>
          <SchoolCard
            title='Escola Municipal Francisco Labanca'
            src='https://mediaserver.almg.gov.br/acervo/473/622/1473622.jpg'
            alt='placeholder'
            subtitle='Rua Carmélia Loff, 70 - Centro (Justinópolis), Ribeirão das Neves'
          />
        </Link>

        <Link to='/#'>
          <SchoolCard
            title='Escola Estadual Lorem Ipsum Dolor'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
            alt='placeholder'
            subtitle='Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
          />
        </Link>

        <Link to='/#'>
          <SchoolCard
            title='Escola Estadual Lorem Ipsum Dolor'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
            alt='placeholder'
            subtitle='Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
          />
        </Link>

        <Link to='/#'>
          <SchoolCard
            title='Escola Estadual Lorem Ipsum Dolor'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
            alt='placeholder'
            subtitle='Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
          />
        </Link>
      </div>
    </section>
  );
}
