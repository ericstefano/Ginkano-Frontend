import { rest } from 'msw';
import { donationDb } from '../data/donationDb';
import { generateHexId, getBaseUrl } from './utils';
import {
  DONATION_CREATE_URL,
  DONATION_EDIT_URL,
  DONATION_DELETE_URL,
  DONATION_GET_ALL_URL,
} from '@/api/donation';

export const donation = [
  rest.get(getBaseUrl(DONATION_GET_ALL_URL), async (_req, res, ctx) => {
    const donations = donationDb.donation.getAll();
    return res(
      ctx.status(200),
      ctx.json({
        data: donations.map((donation) => ({ donation })),
      }),
    );
  }),

  rest.post(getBaseUrl(DONATION_CREATE_URL), async (req, res, ctx) => {
    const json = await req.json();
    const donation = { ...json, token: generateHexId() };
    donationDb.donation.create(donation);
    return res(ctx.status(200), ctx.json({ donation }));
  }),

  rest.post(getBaseUrl(DONATION_EDIT_URL), async (req, res, ctx) => {
    const json = await req.json();
    donationDb.donation.update({
      where: { token: { equals: json.token } },
      data: json,
    });
    return res(ctx.status(200));
  }),

  rest.post(getBaseUrl(DONATION_DELETE_URL), async (req, res, ctx) => {
    const json = await req.json();
    donationDb.donation.delete(json);
    return res(ctx.status(200));
  }),
];
