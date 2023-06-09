import { useNavigate } from 'react-router-dom';
import { LoginForm } from '@/pages/LoginPage/LoginForm';
import { Button } from '@/components';

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center min-h-screen px-4'>
      <LoginForm />
      <div className='flex gap-4 mt-6 items-center'>
        <p className='text-lg text-neutral-800'>É visitante?</p>
        <Button size='sm' variant='outlined' onClick={() => navigate('/')}>
          Ver grupos
        </Button>
      </div>
    </div>
  );
}
