import { lazy } from 'react';
import { useAuthContext } from './contexts/auth';

const LazyPrivateAppRouter = lazy(() => import('@/routes/private'));
const LazyPublicAppRouter = lazy(() => import('@/routes/public'));

function App() {
  const { user } = useAuthContext();
  return user ? <LazyPrivateAppRouter /> : <LazyPublicAppRouter />;
}

export default App;
