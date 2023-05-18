import { vi } from 'vitest';

import { Button } from './Button';
import { render, screen, userEvent, within } from '@/test/utils';

const buttonText = 'Click';
describe('Component: Button', () => {
  it('should render', () => {
    render(<Button>{buttonText}</Button>);

    const buttonElement = screen.getByRole('button', { name: buttonText });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(buttonText);
  });

  it('should call click function', async () => {
    const buttonFunction = vi.fn();

    render(<Button onClick={buttonFunction}>{buttonText}</Button>);

    const buttonElement = screen.getByRole('button', { name: /Click/i });
    await userEvent.click(buttonElement);

    expect(buttonFunction).toBeCalledTimes(1);
  });

  it('should have a custom class if i pass to the button', () => {
    render(<Button className='custom-class'>{buttonText}</Button>);

    const buttonElement = screen.getByRole('button', { name: /Click/i });

    expect(buttonElement).toHaveClass('custom-class');
  });

  it('should have a loading icon if loading is true', () => {
    render(<Button loading={true}>{buttonText}</Button>);

    const buttonElement = screen.getByRole('button', { name: /Click/i });
    const loading = within(buttonElement).queryByTestId('loader');

    expect(loading).toBeInTheDocument();
  });
});
