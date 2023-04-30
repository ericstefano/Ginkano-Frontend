import { Card } from '@/components/Card';
import { useAuthContext } from '@/contexts/auth';

export default function MainPage() {
  const { logout, user } = useAuthContext();

  return (
    <section className='mx-auto gap-4 p-8 max-w-6xl'>
      <div className='flex justify-between'>
        <h1 className='mb-4 text-4xl font-semibold'>
          Bem-vindo ao Ginkano, {user?.firstName}!
        </h1>
        <button
          onClick={() => logout()}
          className='px-6 h-12 rounded-md font-600 uppercase shadow bg-violet-500 active:bg-violet-900 text-gray-50 transition-all active:(translate-y-0.5 scale-99) hover:(scale-103 shadow-md)'
        >
          Logout
        </button>
      </div>

      <h1 className='mb-2 text-3xl font-semibold'>Suas escolas:</h1>
      <div className='flex gap-4 flex-wrap'>
        <Card
          title='Escola Municipal Francisco Labanca'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
          alt='placeholder'
        />
        <Card
          title='Escola Estadual Lorem Ipsum'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
          alt='placeholder'
        />
        <Card
          title='Escola Estadual Lorem Ipsum'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
          alt='placeholder'
        />
        <Card
          title='Escola Estadual Lorem Ipsum'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
          alt='placeholder'
        />
        {/* <Card
          title='Turma 101'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
          alt='placeholder'
        /> */}
      </div>
    </section>
  );
}
