import { rest } from 'msw';
import { groupDb } from '../data/groupDb';
import { getBaseUrl } from './utils';
import { GROUP_GET_ALL_URL } from '@/api/group';
export const group = [
  rest.get(getBaseUrl(GROUP_GET_ALL_URL), async (_req, res, ctx) => {
    const groups = groupDb.group.getAll();
    return res(
      ctx.status(200),
      ctx.json({
        data: groups.map((group) => ({ group: group })),
      }),
    );
  }),
];
