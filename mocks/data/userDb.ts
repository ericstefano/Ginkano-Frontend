import { factory, primaryKey } from '@mswjs/data';

export const userModel = {
  user: {
    username: primaryKey(String),
    password: String,
    firstname: String,
    lastname: String,
  },
};

const userDb = factory({
  ...userModel,
});

userDb.user.create({
  username: 'erig',
  password: 'Teste@123',
  firstname: 'Eric',
  lastname: 'Lima',
});

userDb.user.create({
  username: 'tutu',
  password: 'Teste@123',
  firstname: 'Arthur',
  lastname: 'Henrique',
});

userDb.user.create({
  username: 'lua',
  password: 'Teste@123',
  firstname: 'Luan',
  lastname: 'Otavio',
});

userDb.user.create({
  username: 'hugao',
  password: 'Teste@123',
  firstname: 'Hugo',
  lastname: 'Guimarães',
});

export { userDb };
