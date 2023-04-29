import { rest } from 'msw';
import { getBaseUrl } from './utils';

export const auth = [
  rest.post(getBaseUrl('/auth'), (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
