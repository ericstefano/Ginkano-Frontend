import client from '../client';
import {
  USER_AUTH_URL,
  USER_BASE_URL,
  USER_REGISTER_URL,
} from './url.constants';
import { User } from '@/types/User';

export type CreateUserParams = {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  conditions: number;
};

export async function createAuth(data: CreateUserParams): Promise<void> {
  const res = await client.post(USER_REGISTER_URL, data);
  return res.data;
}

export type AuthResponseDto = { jwtToken: string; data: User };
export type GetAuthParams = { username: string; password: string };

export async function getAuth(data: GetAuthParams): Promise<AuthResponseDto> {
  const res = await client.post(USER_AUTH_URL, data);
  return res.data;
}

export async function getUser(): Promise<User> {
  const res = await client.get(USER_BASE_URL);
  return res.data;
}
