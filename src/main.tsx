import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '@unocss/reset/tailwind.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// No unresolved for compile-time generated css
// eslint-disable-next-line import/no-unresolved
import 'uno.css';
import App from './App';
import Providers from './providers';

const container = document.getElementById('root');
const root = createRoot(container as HTMLDivElement);
root.render(
  <StrictMode>
    <Providers>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </Providers>
  </StrictMode>,
);
