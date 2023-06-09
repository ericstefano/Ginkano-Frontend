export type CreateDonationParams = {
  doador: string;
  quantidade: number;
  pontos: number;
  item: string;
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
};

export type Donation = {
  doador: string;
  quantidade: number;
  pontos: number;
  item: string;
  token: string;
};

export type GetAllDonationsResponseDto = { data: { donation: Donation }[] };
