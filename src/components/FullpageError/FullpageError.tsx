type FullpageErrorProps = { error: Error };
export const FullpageError = ({ error }: FullpageErrorProps) => {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center gap-6'>
      <span className='flex flex-col items-center gap-3'>
        <h1 className='text-3xl'>{error.name} :(</h1>
        <h2 className='text-4xl text-red-500 font-bold'>{error.message}</h2>
      </span>
      <button
        className='px-6 h-12 rounded-md font-600 uppercase shadow bg-violet-500 active:bg-violet-900 text-gray-50 transition-all active:(translate-y-0.5 scale-99) hover:(scale-103 shadow-md)'
        onClick={() => window.location.reload()}
      >
        Reload
      </button>
    </div>
  );
};
