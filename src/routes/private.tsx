import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { lazy } from 'react';
import { MainLayout } from '@/layouts/';
const LazyListSchoolsPage = lazy(
  () => import('@/pages/ListSchoolsPage/ListSchoolsPage'),
);
const LazySchoolPage = lazy(() => import('@/pages/SchoolPage/SchoolPage'));
const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LazyListSchoolsPage />,
      },
      {
        path: '/school',
        element: <LazySchoolPage />,
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
