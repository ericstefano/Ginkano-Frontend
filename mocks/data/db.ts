import { factory } from '@mswjs/data';
import { userModel } from './user';

export const db = factory({
  ...userModel,
});

db.user.create({
  id: '1',
  username: 'erig',
  password: 'Teste@123',
  firstName: 'Eric',
  lastName: 'Lima',
});

db.user.create({
  id: '2',
  username: 'tutu',
  password: 'Teste@123',
  firstName: 'Arthur',
  lastName: 'Henrique',
});

db.user.create({
  id: '3',
  username: 'lua',
  password: 'Teste@123',
  firstName: 'Luan',
  lastName: 'Otavio',
});

db.user.create({
  id: '4',
  username: 'hugao',
  password: 'Teste@123',
  firstName: 'Hugo',
  lastName: 'Guimarães',
});
