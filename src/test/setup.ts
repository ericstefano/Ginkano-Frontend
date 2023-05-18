import { vi } from 'vitest';
import { testQueryClient } from './utils';
import { clear } from '@/services/localStorage';
import '@testing-library/jest-dom/extend-expect';
import { server } from '~mocks/servers/test';

// No need to typecheck a mock
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore-error
globalThis.window.matchMedia = () => {
  return {
    matches: false,
    addListener: vi.fn(),
    removeListener: vi.fn(),
  };
};

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => {
  server.close();
  vi.unstubAllGlobals();
});

afterEach(() => {
  testQueryClient.clear();
  server.resetHandlers();
  clear();
});
