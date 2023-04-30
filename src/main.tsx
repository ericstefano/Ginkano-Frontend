import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '@unocss/reset/tailwind.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// No unresolved for compile-time generated css
// eslint-disable-next-line import/no-unresolved
import 'uno.css';
import App from './App';
import { API_MOCKING } from './constants';
import Providers from './providers';

const prepare = async (): Promise<void> => {
  if (!API_MOCKING) return;
  const { worker } = await import('../mocks/workers/dev');
  worker.start({ onUnhandledRequest: 'bypass' });
};

const container = document.getElementById('root');
const root = createRoot(container as HTMLDivElement);

// eslint-disable-next-line promise/catch-or-return
prepare().then(() =>
  root.render(
    <StrictMode>
      <Providers>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </Providers>
    </StrictMode>,
  ),
);
