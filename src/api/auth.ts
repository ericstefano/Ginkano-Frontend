import axios from 'axios';
import { API_BASE_URL } from '@/constants';
import { User } from '@/types/User';

export type AuthResponseDto = { token: string };
export type GetAuthParams = { name: string; password: string };

export const getAuth = async ({
  name,
  password,
}: GetAuthParams): Promise<AuthResponseDto> => {
  const res = await axios.post(`${API_BASE_URL}/auth`, { name, password });
  return res.data;
};

export const getUser = async ({ token }: { token: string }): Promise<User> => {
  const res = await axios.post(`${API_BASE_URL}/user`, { token });
  return res.data;
};
