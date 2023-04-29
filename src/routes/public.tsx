import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <div>Rota pública</div>,
  },
];

const publicRouter = createBrowserRouter(routes);

export default function PublicRouterProvider() {
  return <RouterProvider router={publicRouter} />;
}
