import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const Error = () => {
  return <div>erro!</div>;
};
const Loader = () => {
  return <div>carregando...</div>;
};

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
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
