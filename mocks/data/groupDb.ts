import { factory, primaryKey } from '@mswjs/data';

export const groupModel = {
  group: {
    token: primaryKey(String),
    nome: String,
    endereco: String,
  },
};

const groupDb = factory({
  ...groupModel,
});

groupDb.group.create({
  nome: 'Escola Municipal São João',
  token: 'abc12',
  endereco: 'Rua das Flores, 123',
});

groupDb.group.create({
  nome: 'Escola Estadual Carlos Drummond de Andrade',
  token: 'def34',
  endereco: 'Avenida Brasil, 567',
});

groupDb.group.create({
  nome: 'Colégio Particular Santo Antônio',
  token: 'ghi56',
  endereco: 'Rua São Paulo, 890',
});

groupDb.group.create({
  nome: 'Escola Municipal Monteiro Lobato',
  token: 'jkl78',
  endereco: 'Avenida Rio de Janeiro, 321',
});

groupDb.group.create({
  nome: 'Escola Estadual Machado de Assis',
  token: 'mno90',
  endereco: 'Rua dos Cravos, 456',
});

export { groupDb };
