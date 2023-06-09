import { Outlet } from 'react-router-dom';
import { Header, Breadcrumbs } from '@/components';

export const MainLayout = () => {
  return (
    <main className='min-h-screen'>
      <Header />
      <Breadcrumbs />
      <Outlet />
    </main>
  );
};
