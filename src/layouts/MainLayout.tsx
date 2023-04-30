// eslint-disable-next-line import/order
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';

export const MainLayout = () => {
  return (
    <main className='min-h-screen'>
      <Header />
      <Outlet />
    </main>
  );
};
