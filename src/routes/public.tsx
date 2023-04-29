import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { MainContainer } from '@/layouts/';
import { LoginForm } from '@/components/LoginForm';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainContainer />,
    children: [
      {
        index: true,
        element: <LoginForm />,
      },
    ],
  },
];

const publicRouter = createBrowserRouter(routes);

export default function PublicRouterProvider() {
  return <RouterProvider router={publicRouter} />;
}
