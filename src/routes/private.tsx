import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { lazy } from 'react';
import { MainLayout } from '@/layouts/';
const LazyListGroupsPage = lazy(
  () => import('@/pages/ListGroupsPage/ListGroupsPage'),
);
const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LazyListGroupsPage />,
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
