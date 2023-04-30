import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { lazy } from 'react';
import { MainContainer } from '@/layouts/';

const LazyLoginPage = lazy(() => import('@/pages/LoginPage/LoginPage'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainContainer />,
    children: [
      {
        index: true,
        element: <LazyLoginPage />,
      },
    ],
  },
];

const publicRouter = createBrowserRouter(routes);

export default function PublicRouterProvider() {
  return <RouterProvider router={publicRouter} />;
}
