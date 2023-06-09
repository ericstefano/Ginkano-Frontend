export type CreateGroupParams = {
  nome: string;
  endereco: string;
};

export type DeleteGroupParams = {
  nome: string;
  endereco: string;
  token: string;
};

export type EditGroupParams = {
  nome: string;
  endereco: string;
  token: string;
};

export type GetGroupByTokenParams = {
  token: string;
};

export type Group = {
  nome: string;
  token: string;
  endereco: string;
};

export type GetGroupByTokenResponseDto = { data: Group };

export type GetAllGroupsResponseDto = { data: { group: Group }[] };
