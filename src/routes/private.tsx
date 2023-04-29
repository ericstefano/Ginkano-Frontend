import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <div>Rota privada</div>,
  },
];

const privateRouter = createBrowserRouter(routes);

export default function PrivateRouterProvider() {
  return <RouterProvider router={privateRouter} />;
}
