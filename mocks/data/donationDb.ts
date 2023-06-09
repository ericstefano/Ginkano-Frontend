import { factory, primaryKey } from '@mswjs/data';

export const donationModel = {
  donation: {
    token: primaryKey(String),
    doador: String,
    quantidade: Number,
    pontos: Number,
    item: String,
  },
};

const donationDb = factory({
  ...donationModel,
});

donationDb.donation.create({
  doador: 'maria eliza',
  quantidade: 100,
  pontos: 126,
  item: 'latas de alumínio',
  token: '3F4A8',
});

donationDb.donation.create({
  doador: 'joão carlos',
  quantidade: 150,
  pontos: 180,
  item: 'garrafas pet',
  token: '1B7E9',
});

donationDb.donation.create({
  doador: 'ana julia',
  quantidade: 200,
  pontos: 250,
  item: 'papelão',
  token: 'D9C2F',
});

donationDb.donation.create({
  doador: 'pedro luiz',
  quantidade: 75,
  pontos: 95,
  item: 'plásticos em geral',
  token: '6A8B7',
});

donationDb.donation.create({
  doador: 'luciana',
  quantidade: 120,
  pontos: 145,
  item: 'vidro',
  token: 'E5F12',
});

export { donationDb };
