// eslint-disable-next-line import/order
import { Outlet } from 'react-router-dom';
import { Header, Footer, Breadcrumbs } from '@/components';

export const MainLayout = () => {
  return (
    <main className='min-h-screen'>
      <Header />
      <Breadcrumbs />
      <Outlet />
      <Footer />
    </main>
  );
};
