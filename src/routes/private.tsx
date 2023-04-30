import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { lazy } from 'react';
import { MainLayout } from '@/layouts/';
const LazyMainPage = lazy(() => import('@/pages/MainPage/MainPage'));
const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LazyMainPage />,
      },
    ],
  },
  {
    path: '/*',
    element: <Navigate to='/' replace />,
  },
];

const privateRouter = createBrowserRouter(routes);

export default function PrivateRouterProvider() {
  return <RouterProvider router={privateRouter} />;
}
