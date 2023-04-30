// eslint-disable-next-line import/order
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer/Footer';

export const MainLayout = () => {
  return (
    <main className='min-h-screen'>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};
