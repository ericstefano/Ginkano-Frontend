import { describe, expect, it } from 'vitest';
import { rest } from 'msw';
import ListSchoolsPage from './ListSchoolsPage';
import { renderWithProviders, screen } from '@/test/utils';
import { server } from '~mocks/servers/test';
import { getBaseUrl } from '~mocks/handlers/utils';
import { USER_LIST_SCHOOLS_URL } from '@/api/user';

describe('ListSchoolsPage', () => {
  it('should render', async () => {
    await renderWithProviders(<ListSchoolsPage />);
    expect(screen.getByRole('heading', { level: 1, name: /boas-vindas/i }));
    await screen.findByText('Escola Municipal São João');
  });

  it('should render a message if there is no schools', async () => {
    server.use(
      rest.get(getBaseUrl(USER_LIST_SCHOOLS_URL), async (_req, res, ctx) =>
        res(ctx.status(200), ctx.json({ data: [] })),
      ),
    );
    await renderWithProviders(<ListSchoolsPage />);
    expect(screen.getByText(/nenhuma/i)).toBeInTheDocument();
  });

  it('should show a toast if the api call fails', async () => {
    server.use(
      rest.get(getBaseUrl(USER_LIST_SCHOOLS_URL), async (_req, res, ctx) =>
        res(ctx.status(500)),
      ),
    );
    await renderWithProviders(<ListSchoolsPage />, { withToast: true });
    expect(await screen.findByText(/erro ao buscar/i)).toBeInTheDocument();
  });
});
