import axios from 'axios';
import { API_BASE_URL } from '@/constants/environment';

const client = axios.create({
  baseURL: API_BASE_URL,
});

export default client;
