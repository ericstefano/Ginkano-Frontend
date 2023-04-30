import { API_BASE_URL } from '../../src/constants';
export const MOCK_JWT_SECRET = 'secret';
export const getBaseUrl = (path?: string) =>
  path ? API_BASE_URL.concat(path) : API_BASE_URL;
