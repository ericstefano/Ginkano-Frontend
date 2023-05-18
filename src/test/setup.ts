import { clear } from '@/services/localStorage';
import '@testing-library/jest-dom/extend-expect';
import { server } from '~mocks/servers/test';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());

afterEach(() => {
  server.resetHandlers();
  clear();
});
