import { lazy } from 'react';

const LazyPrivateAppRouter = lazy(() => import('@/routes/private'));
const LazyPublicAppRouter = lazy(() => import('@/routes/public'));

function App() {
  const isAuthenticated = true;
  return isAuthenticated ? <LazyPrivateAppRouter /> : <LazyPublicAppRouter />;
}

export default App;
