import { rest } from 'msw';
import { encode, decode } from 'js-base64';
import { db } from '../data/db';
import { getBaseUrl, MOCK_JWT_SECRET } from './utils';
import { USER_AUTH_URL, USER_BASE_URL, USER_REGISTER_URL } from '@/api/user';

export const auth = [
  rest.get(getBaseUrl(USER_AUTH_URL), async (req, res, ctx) => {
    const username = req.headers.get('username');
    const password = req.headers.get('password');

    if (!username || !password) {
      return res(ctx.status(401), ctx.json({ error: 'Bad request' }));
    }

    const user = db.user.findFirst({
      where: {
        username: { equals: username },
        password: { equals: password },
      },
    });

    if (!user) {
      return res(ctx.status(401), ctx.json({ error: 'Invalid credentials' }));
    }

    const FAKE_JWT_TOKEN = encode(`${MOCK_JWT_SECRET},${username},${password}`);

    return res(
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
    const username = req.headers.get('username');
    const password = req.headers.get('password');
    const firstname = req.headers.get('firstname');
    const lastname = req.headers.get('lastname');

    if (!username || !password || !firstname || !lastname) {
      return res(ctx.status(401), ctx.json({ error: 'Bad request' }));
    }

    const user = db.user.findFirst({
      where: {
        username: { equals: username },
      },
    });

    if (user) {
      return res(ctx.status(401), ctx.json({ error: 'Username already used' }));
    }

    db.user.create({
      firstname: firstname,
      lastname: lastname,
      username: username,
      password: password,
    });

    const FAKE_JWT_TOKEN = encode(`${MOCK_JWT_SECRET},${username},${password}`);

    return res(
      ctx.status(200),
      ctx.json({
        data: { firstname, lastname, username },
        jwtToken: FAKE_JWT_TOKEN,
      }),
    );
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
