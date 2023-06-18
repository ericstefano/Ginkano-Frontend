export type CreateDonationParams = {
  doador: string;
  quantidade: number;
  pontos: number;
  item: string;
  token: string;
};

export type DeleteDonationParams = {
  doador: string;
  quantidade: number;
  pontos: number;
  item: string;
  token: string;
};

export type EditDonationParams = {
  doador: string;
  quantidade: number;
  pontos: number;
  item: string;
  token: string;
  code: number;
};

export type MutateDonationResponseDto = {
  item: string;
  doador: string;
  quantidade: number;
  pontos: number;
  token: string;
};

export type Donation = {
  doador: string;
  quantidade: number;
  pontos: number;
  item: string;
  token: string;
  code: number;
};

export type GetAllDonationsResponseDto = { donations: Donation[] };
