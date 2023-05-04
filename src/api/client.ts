import axios from 'axios';
import { API_BASE_URL } from '@/constants/environment';
import { getItem } from '@/services/localStorage';
import { LOCALSTORAGE_TOKEN_KEY } from '@/constants/keys';

const client = axios.create({
  baseURL: API_BASE_URL,
});

client.interceptors.request.use(async (config) => {
  const token = getItem(LOCALSTORAGE_TOKEN_KEY);
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default client;
