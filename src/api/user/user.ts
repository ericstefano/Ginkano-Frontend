import client from '../client';
import {
  USER_AUTH_URL,
  USER_BASE_URL,
  USER_REGISTER_URL,
  USER_EDIT_URL,
  USER_DELETE_URL,
} from './url.constants';
import {
  AuthResponseDto,
  CreateUserParams,
  EditUserParams,
  GetAuthParams,
  GetUserResponseDto,
} from './user.types';

export async function createAuth(data: CreateUserParams): Promise<void> {
  const res = await client.post(USER_REGISTER_URL, data);
  return res.data;
}

export async function getAuth(data: GetAuthParams): Promise<AuthResponseDto> {
  const res = await client.post(USER_AUTH_URL, data);
  return res.data;
}

export async function getUser(): Promise<GetUserResponseDto> {
  const res = await client.get(USER_BASE_URL + '/');
  return res.data;
}

export async function editUser(data: EditUserParams): Promise<void> {
  const res = await client.post(USER_EDIT_URL, data);
  return res.data;
}

export async function deleteUser(): Promise<void> {
  const res = await client.post(USER_DELETE_URL);
  return res.data;
}
