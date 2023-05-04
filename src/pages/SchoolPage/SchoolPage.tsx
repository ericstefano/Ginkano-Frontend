import { CreateCard } from '@/components/CreateCard';
import { GroupCard } from '@/components/GroupCard';
import { useAuthContext } from '@/contexts/auth';

export default function SchoolPage() {
  const { logout } = useAuthContext();
  const schoolName = 'Escola Municipal Francisco Labanca';
  return (
    <section className='mx-auto gap-4 py-8 px-6 lg:px-12 max-w-6xl'>
      <div className='flex justify-between items-center mb-1'>
        <h1 className='text-4xl <lg:text-3xl font-semibold'>{schoolName}</h1>
        <button
          onClick={() => logout()}
          className='px-6 h-12 rounded-md font-600 uppercase shadow bg-violet-500 active:bg-violet-900 text-gray-50 transition-all active:(translate-y-0.5 scale-99) hover:(scale-103 shadow-md)'
        >
          Logout
        </button>
      </div>

      <h2 className='mb-4 text-3xl <lg:text-2xl font-semibold'>Turmas:</h2>
      <div className='flex gap-4 flex-wrap <lg:justify-center'>
        <CreateCard title='Nova turma' />
        <GroupCard
          title='Turma 101'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
          className='pb-1'
          alt='placeholder'
          points={2000}
        />

        <GroupCard
          title='Turma 102'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
          className='pb-1'
          alt='placeholder'
          points={24000}
        />

        <GroupCard
          title='Turma 103'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
          className='pb-1'
          alt='placeholder'
          points={60000}
        />

        <GroupCard
          title='Turma 104'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
          className='pb-1'
          alt='placeholder'
          points={18000}
        />

        <GroupCard
          title='Turma 105'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
          className='pb-1'
          alt='placeholder'
          points={8000}
        />
      </div>
    </section>
  );
}
