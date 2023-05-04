import { factory } from '@mswjs/data';
import { userModel } from './user';

export const db = factory({
  ...userModel,
});

db.user.create({
  id: '1',
  username: 'erig',
  password: 'Teste@123',
  firstname: 'Eric',
  lastname: 'Lima',
});

db.user.create({
  id: '2',
  username: 'tutu',
  password: 'Teste@123',
  firstname: 'Arthur',
  lastname: 'Henrique',
});

db.user.create({
  id: '3',
  username: 'lua',
  password: 'Teste@123',
  firstname: 'Luan',
  lastname: 'Otavio',
});

db.user.create({
  id: '4',
  username: 'hugao',
  password: 'Teste@123',
  firstname: 'Hugo',
  lastname: 'Guimarães',
});
