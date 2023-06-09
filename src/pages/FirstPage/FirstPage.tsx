import { useNavigate } from 'react-router-dom';
import { PinInput, PinInputField } from '@chakra-ui/pin-input';
import { FormEvent, useState } from 'react';
import { Button } from '@/components';

export default function FirstPage() {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (token.length >= 5) {
      navigate(`/group/${token}`);
    }
  };
  return (
    <div className='flex justify-center items-center flex-col h-screen px-4'>
      <h1 className='md:text-5xl text-4xl font-bold mb-6 text-center drop-shadow'>
        Boas-vindas ao Ginkano
      </h1>
      <form
        className='mb-16 flex flex-col justify-center gap-6'
        onSubmit={handleSubmit}
      >
        <div className='flex gap-2 w-xs text-3xl'>
          <PinInput
            type='alphanumeric'
            value={token}
            onChange={(value) => {
              setToken(value);
            }}
          >
            <PinInputField className='border rounded-lg p-2 w-full text-center' />
            <PinInputField className='border rounded-lg p-2 w-full text-center' />
            <PinInputField className='border rounded-lg p-2 w-full text-center' />
            <PinInputField className='border rounded-lg p-2 w-full text-center' />
            <PinInputField className='border rounded-lg p-2 w-full text-center' />
          </PinInput>
        </div>
        <Button>Buscar grupo</Button>
      </form>
      <p className='text-lg mb-3'>É responsável?</p>
      <div className='flex gap-4'>
        <Button size='sm' onClick={() => navigate('/login')}>
          Logue-se
        </Button>
        <Button
          size='sm'
          onClick={() => navigate('/signup')}
          variant='outlined'
        >
          Cadastre-se
        </Button>
      </div>
    </div>
  );
}
