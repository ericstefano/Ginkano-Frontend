import { User } from '@/types';

export type AuthResponseDto = { jwtToken: string; data: User };

export type GetUserResponseDto = { data: User };

export type GetAuthParams = { username: string; password: string };

export type CreateUserParams = {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  conditions: number;
};

export type EditUserParams = {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  ocupacao: string;
  conditions: number;
};
