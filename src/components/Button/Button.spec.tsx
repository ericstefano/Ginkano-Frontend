import { vi } from 'vitest';

import { Button } from './Button';
import { render, screen, userEvent, within } from '@/test/utils';

const buttonText = 'Click';
describe('Button', () => {
  it('should render', () => {
    render(<Button>{buttonText}</Button>);

    const buttonElement = screen.getByRole('button', { name: buttonText });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(buttonText);
  });

  it('should call onclick function when clicked', async () => {
    const buttonFunction = vi.fn();

    render(<Button onClick={buttonFunction}>{buttonText}</Button>);

    const buttonElement = screen.getByRole('button', { name: buttonText });
    await userEvent.click(buttonElement);

    expect(buttonFunction).toBeCalledTimes(1);
  });

  it('should pass custom classes', () => {
    render(<Button className='custom-class'>{buttonText}</Button>);

    const buttonElement = screen.getByRole('button', { name: buttonText });

    expect(buttonElement).toHaveClass('custom-class');
  });

  it('should have a loading icon if loading is true', () => {
    render(<Button loading={true}>{buttonText}</Button>);

    const buttonElement = screen.getByRole('button', { name: buttonText });
    const loading = within(buttonElement).queryByTestId('loader');

    expect(loading).toBeInTheDocument();
  });
});
