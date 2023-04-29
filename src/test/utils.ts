import { ReactElement } from 'react';
import { type RenderOptions, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Providers from '@/providers';

export const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Providers, ...options });

export { userEvent };
export * from '@testing-library/react';
