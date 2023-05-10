import { factory } from '@mswjs/data';
import { userModel } from './user';

export const db = factory({
  ...userModel,
});

db.user.create({
  username: 'erig',
  password: 'Teste@123',
  firstname: 'Eric',
  lastname: 'Lima',
});

db.user.create({
  username: 'tutu',
  password: 'Teste@123',
  firstname: 'Arthur',
  lastname: 'Henrique',
});

db.user.create({
  username: 'lua',
  password: 'Teste@123',
  firstname: 'Luan',
  lastname: 'Otavio',
});

db.user.create({
  username: 'hugao',
  password: 'Teste@123',
  firstname: 'Hugo',
  lastname: 'Guimarães',
});
