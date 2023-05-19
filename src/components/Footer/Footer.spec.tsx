import { Footer } from './Footer';
import { render, screen } from '@/test/utils';

describe('Footer', () => {
  it('should render', () => {
    render(<Footer> Teste</Footer>);

    const footer = screen.getByText(/Teste/i);

    expect(footer).toBeInTheDocument();
  });
});
