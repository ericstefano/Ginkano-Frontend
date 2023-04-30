import axios from 'axios';
import { API_BASE_URL } from '@/constants';
import { User } from '@/types/User';

export type AuthResponseDto = { token: string };
export type GetAuthParams = { username: string; password: string };

export const getAuth = async ({
  username,
  password,
}: GetAuthParams): Promise<AuthResponseDto> => {
  const res = await axios.post(`${API_BASE_URL}/auth`, { username, password });
  return res.data;
};

export const getUser = async ({ token }: { token: string }): Promise<User> => {
  const res = await axios.post(`${API_BASE_URL}/user`, { token });
  return res.data;
};
