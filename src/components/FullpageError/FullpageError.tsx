import { Button } from '../Button';

type FullpageErrorProps = { error: Error };
export const FullpageError = ({ error }: FullpageErrorProps) => {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center gap-6 max-w-3xl mx-auto text-center px-12'>
      <h1 className='text-3xl'>{error.name} :(</h1>
      <h2 className='text-4xl text-red-500 font-bold'>{error.message}</h2>
      <Button onClick={() => window.location.reload()}>Reload</Button>
    </div>
  );
};
