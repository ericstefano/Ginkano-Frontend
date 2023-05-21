import { describe, expect, it } from 'vitest';
import { rest } from 'msw';
import ListGroupsPage from './ListGroupsPage';
import { renderWithProviders, screen } from '@/test/utils';
import { server } from '~mocks/servers/test';
import { getBaseUrl } from '~mocks/handlers/utils';
import { GROUP_GET_ALL_URL } from '@/api/group';

describe('ListGroupsPage', () => {
  it('should render', async () => {
    await renderWithProviders(<ListGroupsPage />);
    expect(screen.getByRole('heading', { level: 1, name: /boas-vindas/i }));
    await screen.findByText('Escola Municipal São João');
  });

  it('should render a message if there is no groups', async () => {
    server.use(
      rest.get(getBaseUrl(GROUP_GET_ALL_URL), async (_req, res, ctx) =>
        res(ctx.status(200), ctx.json({ data: [] })),
      ),
    );
    await renderWithProviders(<ListGroupsPage />);
    expect(screen.getByText(/nenhum/i)).toBeInTheDocument();
  });

  it('should show a toast if the api call fails', async () => {
    server.use(
      rest.get(getBaseUrl(GROUP_GET_ALL_URL), async (_req, res, ctx) =>
        res(ctx.status(500)),
      ),
    );
    await renderWithProviders(<ListGroupsPage />, { withToast: true });
    expect(await screen.findByText(/erro ao buscar/i)).toBeInTheDocument();
  });
});
