import { rest } from 'msw';
import { encode, decode } from 'js-base64';
import { db } from '../data/db';
import { getBaseUrl, MOCK_JWT_SECRET } from './utils';

export const auth = [
  rest.post(getBaseUrl('/auth'), async (req, res, ctx) => {
    const body = await req.json();

    const user = db.user.findFirst({
      where: {
        username: { equals: body.username },
        password: { equals: body.password },
      },
    });

    if (!user) {
      return res(ctx.status(401), ctx.json({ error: 'Invalid credentials' }));
    }

    const FAKE_JWT_TOKEN = encode(
      `${MOCK_JWT_SECRET},${body.username},${body.password}`,
    );

    return res(
      ctx.status(200),
      ctx.json({
        token: FAKE_JWT_TOKEN,
      }),
    );
  }),

  rest.post(getBaseUrl('/user'), async (req, res, ctx) => {
    const body = await req.json();
    const jwt = body.token;
    const decodedjwt = decode(jwt);
    const [_secret, username, password] = decodedjwt.split(',');

    const user = db.user.findFirst({
      where: {
        username: { equals: username },
        password: { equals: password },
      },
    });

    if (!user) {
      return res(ctx.status(401), ctx.json({ error: 'Invalid token' }));
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
      }),
    );
  }),
];
