import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import clsx from 'clsx';
import { Input } from '../Input';
import { PasswordInput } from '../PasswordInput';
import { LoginFormData, loginFormSchema } from './LoginForm.schema';
import { useAuthContext } from '@/contexts/auth';

export const LoginForm = () => {
  const [error, setError] = useState<Error | undefined>();
  const { login } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { name: '', password: '' },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data);
    } catch (error) {
      setError(new Error('Usuário ou senha inválidos'));
    }
  };

  return (
    <form
      className=' bg-violet-700 w-lg flex p-10 rounded-4 shadow-lg flex flex-col'
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className='text-5xl font-bold text-white mb-3 text-center drop-shadow'>
        Bem-vindo ao Ginkano!
      </h1>

      <Input
        label='Nome'
        required
        className='mb-3'
        {...register('name')}
        description={errors.name?.message}
        error={!!errors.name || !!error}
      />

      <PasswordInput
        label='Senha'
        required
        className={clsx({ 'mb-10': !error, 'mb-4': error })}
        {...register('password')}
        description={errors.password?.message}
        error={!!errors.password}
      />

      {error ? (
        <div
          role='alert'
          className='text-sm text-red-100 flex justify-center mb-6'
        >
          <span role='alert' className='bg-red-500 py-1.5 px-2 rounded-1 '>
            {error?.message}
          </span>
        </div>
      ) : null}

      <div className='flex justify-between items-center px-2'>
        <div className='leading-6 font-500 text-center'>
          <p className='text-gray-50 text-sm'>Não possui conta?</p>
          <Link
            to='#'
            className='cursor-pointer text-purple-50 underline text-lg transition-all hover:( drop-shadow-md text-violet-300)'
          >
            Cadastre-se!
          </Link>
        </div>
        <button
          type='submit'
          className='px-6 h-12 rounded-md font-600 uppercase shadow bg-violet-500 active:bg-violet-900 text-gray-50 transition-all active:(translate-y-0.5 scale-99) hover:(scale-103 shadow-md)'
        >
          Logar
        </button>
      </div>
    </form>
  );
};
