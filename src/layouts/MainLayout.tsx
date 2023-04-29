// eslint-disable-next-line import/order
import { Outlet } from 'react-router-dom';
import { MainContainer } from './MainContainer';
import { Header } from '@/components/Header';

export const MainLayout = () => {
  return (
    <MainContainer>
      <Header />
      <Outlet />
    </MainContainer>
  );
};
