import { ReactElement, ReactNode, Suspense } from 'react';
import {
  type RenderOptions,
  render,
  waitForElementToBeRemoved,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { vi } from 'vitest';
import { Loader } from '@/components';
import { AuthProvider } from '@/contexts/auth';

export const testQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
  logger: {
    log: console.log,
    warn: console.warn,
    error: () => vi.fn(),
  },
});

const TestProviders = ({
  children,
  initialRoutes = ['/'],
}: {
  children: ReactNode;
  initialRoutes?: MemoryRouterProps['initialEntries'];
}) => {
  return (
    <QueryClientProvider client={testQueryClient}>
      <Suspense fallback={<Loader />}>
        <MemoryRouter initialEntries={initialRoutes}>
          <AuthProvider>{children}</AuthProvider>
        </MemoryRouter>
      </Suspense>
    </QueryClientProvider>
  );
};

export const waitForLoadingToFinish = async () => {
  const loaders = screen.queryAllByTestId(/loader/i);
  if (loaders.length > 0) {
    await waitForElementToBeRemoved(screen.queryAllByTestId(/loader/i));
  }
};

type RenderWithProvidersParams = Omit<RenderOptions, 'wrapper'> & {
  withToast?: boolean;
};

export const renderWithProviders = async (
  ui: ReactElement,
  { withToast = false, ...options }: RenderWithProvidersParams = {},
) => {
  const returnValue = {
    ...render(ui, {
      wrapper: () => (
        <TestProviders>
          {ui}
          {withToast ? (
            <Toaster position='bottom-center' reverseOrder={false} />
          ) : null}
        </TestProviders>
      ),
      ...options,
    }),
  };
  await waitForLoadingToFinish();

  return returnValue;
};

export { userEvent };
export * from '@testing-library/react';
