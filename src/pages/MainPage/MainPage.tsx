import { Link } from 'react-router-dom';
import { CreateCard } from '@/components/CreateCard';
import { SchoolCard } from '@/components/SchoolCard';
import { useAuthContext } from '@/contexts/auth';

export default function MainPage() {
  const { logout, user } = useAuthContext();

  return (
    <section className='mx-auto gap-4 py-8 px-6 lg:px-12 max-w-6xl'>
      <div className='flex justify-between items-center mb-1'>
        <h1 className='text-4xl <lg:text-3xl font-semibold'>
          Bem-vindo ao Ginkano, {user?.firstname}!
        </h1>
        <button
          onClick={() => logout()}
          className='px-6 h-12 rounded-md font-600 uppercase shadow bg-violet-500 active:bg-violet-900 text-gray-50 transition-all active:(translate-y-0.5 scale-99) hover:(scale-103 shadow-md)'
        >
          Logout
        </button>
      </div>
      <h2 className='mb-4 text-3xl <lg:text-2xl font-semibold'>Seus grupos:</h2>
      <div className='flex gap-4 flex-wrap <lg:justify-center'>
        <CreateCard title='Novo grupo' />
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
