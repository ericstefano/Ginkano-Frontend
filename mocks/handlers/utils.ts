import { API_BASE_URL } from '@/constants/environment';
export const MOCK_JWT_SECRET = 'secret';
export function getBaseUrl(path?: string) {
  return path ? API_BASE_URL.concat(path) : API_BASE_URL;
}
