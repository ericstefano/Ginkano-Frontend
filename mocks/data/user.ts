import { primaryKey } from '@mswjs/data';

export const userModel = {
  user: {
    username: primaryKey(String),
    password: String,
    firstname: String,
    lastname: String,
  },
};
