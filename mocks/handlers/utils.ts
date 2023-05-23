import { API_BASE_URL } from '@/constants/environment';
export const MOCK_JWT_SECRET = 'secret';
export function getBaseUrl(path?: string) {
  return path ? API_BASE_URL.concat(path) : API_BASE_URL;
}

export function generateHexId() {
  let hexId = '';
  while (hexId.length < 5) {
    hexId += Math.random().toString(16).substring(2);
  }
  return hexId.substring(0, 5);
}
