import { rest } from 'msw';
import { encode, decode } from 'js-base64';
import { db } from '../data/db';
import { getBaseUrl, MOCK_JWT_SECRET } from './utils';
import { USER_AUTH_URL, USER_BASE_URL, USER_REGISTER_URL } from '@/api/user';

export const auth = [
  rest.post(getBaseUrl(USER_AUTH_URL), async (req, res, ctx) => {
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
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({
        data: {
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
        },
        jwtToken: FAKE_JWT_TOKEN,
      }),
    );
  }),

  rest.post(getBaseUrl(USER_REGISTER_URL), async (req, res, ctx) => {
    const body = await req.json();

    const user = db.user.findFirst({
      where: {
        username: { equals: body.username },
      },
    });

    if (user) {
      return res(ctx.status(401), ctx.json({ error: 'Username already used' }));
    }

    db.user.create({
      firstname: body.firstname,
      lastname: body.lastname,
      username: body.username,
      password: body.password,
    });
    return res(ctx.delay(1000), ctx.status(200));
  }),

  rest.get(getBaseUrl(USER_BASE_URL), async (req, res, ctx) => {
    const jwt = req.headers.get('authorization')?.replace('Bearer ', '');
    const decodedjwt = decode(jwt as string);
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
        firstname: user.firstname,
        lastname: user.lastname,
      }),
    );
  }),
];
