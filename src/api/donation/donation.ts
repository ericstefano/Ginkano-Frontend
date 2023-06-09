import client from '../client';
import {
  DONATION_CREATE_URL,
  DONATION_DELETE_URL,
  DONATION_EDIT_URL,
  DONATION_GET_ALL_URL,
} from './url.constants';
import {
  CreateDonationParams,
  DeleteDonationParams,
  EditDonationParams,
  GetAllDonationsResponseDto,
} from './donation.types';

export async function createDonation(
  data: CreateDonationParams,
): Promise<void> {
  const res = await client.post(DONATION_CREATE_URL, data);
  return res.data;
}

export async function deleteDonation(
  data: DeleteDonationParams,
): Promise<void> {
  const res = await client.post(DONATION_DELETE_URL, data);
  return res.data;
}

export async function editDonation(data: EditDonationParams): Promise<void> {
  const res = await client.post(DONATION_EDIT_URL, data);
  return res.data;
}

export async function getAllDonations(): Promise<GetAllDonationsResponseDto> {
  const res = await client.get(DONATION_GET_ALL_URL);
  return res.data;
}
