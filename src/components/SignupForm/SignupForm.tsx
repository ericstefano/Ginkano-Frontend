import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import clsx from 'clsx';
import { Input } from '../Input';
import { PasswordInput } from '../PasswordInput';
import { Checkbox } from '../Checkbox';
import { RegisterFormData, registerFormSchema } from './SignupForm.schema';
import { useAuthContext } from '@/contexts/auth';

export const SignupForm = () => {
  const [error, setError] = useState<Error | undefined>();
  const { login } = useAuthContext();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: { firstname: '', lastname: '', password: '', confirm: '' },
  });

  const onSubmit = async (data: RegisterFormData) => {
    console.log(data);
  };

  return (
    <form
      className='bg-violet-700 w-md md:w-lg flex md:p-10 p-6 rounded-4 shadow-lg flex flex-col'
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className='md:text-5xl text-4xl font-bold text-white mb-3 text-center drop-shadow'>
        Cadastro
      </h1>

      <Input
        label='Nome'
        required
        className='mb-3'
        {...register('firstname')}
        description={errors.firstname?.message}
        error={!!errors.firstname || !!error}
      />

      <Input
        label='Sobrenome'
        required
        className='mb-3'
        {...register('lastname')}
        description={errors.lastname?.message}
        error={!!errors.lastname || !!error}
      />

      <Input
        label='Usuário'
        required
        className='mb-3'
        {...register('username')}
        description={errors.username?.message}
        error={!!errors.username || !!error}
      />

      <PasswordInput
        label='Senha'
        required
        className={clsx({ 'mb-3': !error, 'mb-5': error })}
        {...register('password')}
        description={errors.password?.message}
        error={!!errors.password}
      />

      <PasswordInput
        label='Confirmar senha'
        required
        className={clsx({ 'mb-4': !error, 'mb-5': error })}
        {...register('confirm')}
        description={errors.confirm?.message}
        error={!!errors.confirm}
      />

      <Controller
        control={control}
        name='conditions'
        render={({ field }) => (
          <Checkbox
            required
            label={
              <span>
                Eu li e concordo com os{' '}
                <Link
                  to='#'
                  className='cursor-pointer text-purple-50 underline transition-all hover:( drop-shadow-md text-violet-300)'
                >
                  termos e condições
                </Link>
              </span>
            }
            className='mb-8'
            onCheckedChange={field.onChange}
            name={field.name}
            value={field.value} // problema com booleano | string
            description={errors.conditions?.message}
            error={!!errors.conditions}
            id={field.name}
          />
        )}
      />

      {error ? (
        <div
          role='alert'
          className='text-sm text-red-100 flex justify-center mb-6'
        >
          <span role='alert' className='bg-red-500 py-1.5 px-2 rounded-2 '>
            {error?.message}
          </span>
        </div>
      ) : null}

      <div className='flex justify-between items-center px-2'>
        <div className='leading-6 font-500 text-center'>
          <p className='text-gray-50 text-sm'>Já possui conta?</p>
          <Link
            to='/login'
            className='cursor-pointer text-purple-50 underline text-lg transition-all hover:( drop-shadow-md text-violet-300)'
          >
            Logue-se
          </Link>
        </div>
        <button
          type='submit'
          className='px-6 h-12 rounded-md font-600 uppercase shadow bg-violet-500 active:bg-violet-900 text-gray-50 transition-all active:(translate-y-0.5 scale-99) hover:(scale-103 shadow-md)'
        >
          Cadastrar
        </button>
      </div>
    </form>
  );
};
