import axios from 'axios';
import client from '../client';
import {
  USER_AUTH_URL,
  USER_BASE_URL,
  USER_REGISTER_URL,
} from './url.constants';
import { User } from '@/types/User';
import { API_BASE_URL } from '@/constants/environment';

export type CreateUserParams = {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  conditions: number;
};

export async function createAuth(data: CreateUserParams): Promise<void> {
  const res = await axios.post(`${API_BASE_URL}${USER_REGISTER_URL}`, {
    headers: { ...data },
  });
  return res.data;
}

export type AuthResponseDto = { jwtToken: string; data: User };
export type GetAuthParams = { username: string; password: string };

export async function getAuth(data: GetAuthParams): Promise<AuthResponseDto> {
  const res = await axios.get(`${API_BASE_URL}${USER_AUTH_URL}`, {
    headers: {
      ...data,
    },
  });
  return res.data;
}

export async function getUser(): Promise<User> {
  const res = await client.get(USER_BASE_URL);
  return res.data;
}
