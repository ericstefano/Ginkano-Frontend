import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
export const MainContainer = ({ children }: { children?: ReactNode }) => {
  return (
    <main className='min-h-screen'>{children ? children : <Outlet />}</main>
  );
};
