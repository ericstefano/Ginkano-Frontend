import { rest } from 'msw';
import { groupDb } from '../data/groupDb';
import { generateHexId, getBaseUrl } from './utils';
import {
  GROUP_CREATE_URL,
  GROUP_DELETE_URL,
  GROUP_EDIT_URL,
  GROUP_GET_ALL_URL,
} from '@/api/group';
export const group = [
  rest.get(getBaseUrl(GROUP_GET_ALL_URL), async (_req, res, ctx) => {
    const groups = groupDb.group.getAll();
    return res(
      ctx.status(200),
      ctx.json({
        data: groups.map((group) => ({ group })),
      }),
    );
  }),

  rest.post(getBaseUrl(GROUP_CREATE_URL), async (req, res, ctx) => {
    const json = await req.json();
    const group = { ...json, token: generateHexId() };
    groupDb.group.create(group);
    return res(ctx.status(200), ctx.json({ group }));
  }),

  rest.post(getBaseUrl(GROUP_EDIT_URL), async (req, res, ctx) => {
    const json = await req.json();
    groupDb.group.update({
      where: { token: { equals: json.token } },
      data: json,
    });
    return res(ctx.status(200));
  }),

  rest.post(getBaseUrl(GROUP_DELETE_URL), async (req, res, ctx) => {
    const json = await req.json();
    groupDb.group.delete(json);
    return res(ctx.status(200));
  }),
];
