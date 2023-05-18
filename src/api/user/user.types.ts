import { User } from '@/types';

export type CreateUserParams = {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  conditions: number;
};

export type AuthResponseDto = { jwtToken: string; data: User };
export type GetAuthParams = { username: string; password: string };

export type School = {
  nome: string;
  token: string;
  endereco: string;
};

export type GetSchoolsResponseDto = { data: { school: School }[] };
