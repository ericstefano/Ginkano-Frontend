import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { lazy } from 'react';

const LazyLoginPage = lazy(() => import('@/pages/LoginPage/LoginPage'));
const LazySignupPage = lazy(() => import('@/pages/SignupPage/SignupPage'));

const routes: RouteObject[] = [
  {
    path: '/signup',
    element: <LazySignupPage />,
  },
  {
    path: '/login',
    element: <LazyLoginPage />,
  },
  {
    path: '/*',
    element: <Navigate to='/login' replace />,
  },
];

const publicRouter = createBrowserRouter(routes);

export default function PublicRouterProvider() {
  return <RouterProvider router={publicRouter} />;
}
