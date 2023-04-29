export const LoginForm = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <form className=' bg-violet-700 w-lg flex p-9 rounded-4 shadow-lg flex flex-col'>
        <h1 className='text-5xl font-bold text-white mb-2 text-center drop-shadow'>
          Bem-vindo ao Ginkano!
        </h1>
        <label htmlFor='nome' className='text-gray-50 font-500 mb-0.5'>
          Nome
        </label>
        <input
          type='text'
          id='nome'
          className='py-1.5 px-2 rounded-2.5 mb-4 focus:outline-none'
        />
        <label htmlFor='nome' className='text-gray-50 font-500 mb-0.5'>
          Senha
        </label>
        <input
          type='password'
          id='nome'
          className='py-1.5 px-2 rounded-2.5 mb-9 focus:outline-none'
        />
        <div className='flex justify-between items-center px-2'>
          <div className='leading-6 font-500 text-center'>
            <p className='text-gray-50 text-sm'>Não possui conta? </p>
            <a
              href='#'
              className='cursor-pointer text-purple-50 underline text-lg transition-all hover:( drop-shadow-md text-violet-300)'
            >
              Cadastre-se!
            </a>
          </div>
          <button
            type='button'
            className='px-6 h-12 rounded-md font-600 uppercase shadow bg-violet-500 active:bg-violet-900 text-gray-50 transition-all active:(translate-y-0.5 scale-99) hover:(scale-103 shadow-md)'
          >
            Logar
          </button>
        </div>
      </form>
    </div>
  );
};
