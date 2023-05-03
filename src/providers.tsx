import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { FullpageError } from './components/FullpageError';
import { Loader } from './components/Loader';
import { AuthProvider } from './contexts/auth';

export const queryConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
};

export const queryClient = new QueryClient(queryConfig);

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={FullpageError}>
        <Suspense fallback={<Loader />}>
          <AuthProvider>{children}</AuthProvider>
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
