import { useAuthContext } from '@/contexts/auth';

export default function MainPage() {
  const { logout, user } = useAuthContext();

  return (
    <div className='mt-10 mx-4 gap-4'>
      <p className='mb-2'>Bem-vindo {user?.firstName}!</p>
      <button
        className='bg-red-500 p-2 text-white font-bold text-lg rounded-3'
        onClick={() => logout()}
      >
        Logout
      </button>
    </div>
  );
}
