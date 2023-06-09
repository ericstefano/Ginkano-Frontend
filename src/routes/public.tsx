import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { lazy } from 'react';

const LazyLoginPage = lazy(() => import('@/pages/LoginPage/LoginPage'));
const LazySignupPage = lazy(() => import('@/pages/SignupPage/SignupPage'));
const LazyTermsAndConditionsPage = lazy(
  () => import('@/pages/TermsAndConditionsPage/TermsAndConditionsPage'),
);
const LazyGroupDonationsPage = lazy(
  () => import('@/pages/GroupDonationsPage/GroupDonationsPage'),
);

const LazyFirstPage = lazy(() => import('@/pages/FirstPage/FirstPage'));

const routes: RouteObject[] = [
  { path: '/', element: <LazyFirstPage /> },
  {
    path: '/signup',
    element: <LazySignupPage />,
  },
  {
    path: '/login',
    element: <LazyLoginPage />,
  },
  {
    path: '/terms-and-conditions',
    element: <LazyTermsAndConditionsPage />,
  },
  { path: 'group/:token', element: <LazyGroupDonationsPage /> },

  {
    path: '/*',
    element: <Navigate to='/' replace />,
  },
];

const publicRouter = createBrowserRouter(routes);

export default function PublicRouterProvider() {
  return <RouterProvider router={publicRouter} />;
}
