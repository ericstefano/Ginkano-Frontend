import { lazy } from 'react';
import { TEMP_AUTH } from './constants/';

const LazyPrivateAppRouter = lazy(() => import('@/routes/private'));
const LazyPublicAppRouter = lazy(() => import('@/routes/public'));

function App() {
  const isAuthenticated = TEMP_AUTH;
  return isAuthenticated ? <LazyPrivateAppRouter /> : <LazyPublicAppRouter />;
}

export default App;
