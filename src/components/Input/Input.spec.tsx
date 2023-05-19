import { vi } from 'vitest';
import { Input } from './Input';
import { render, screen, userEvent } from '@/test/utils';

describe('Input', () => {
  it('should be able to render', () => {
    render(<Input label='E-mail' id='element' placeholder='test' />);

    const input = screen.getByPlaceholderText(/test/i);

    expect(input).toBeInTheDocument();
  });

  it('should call onChange function', async () => {
    const mockedOnChange = vi.fn();

    render(
      <Input
        label='E-mail'
        onChange={mockedOnChange}
        id='element'
        placeholder='test'
      />,
    );

    const input = screen.getByPlaceholderText(/test/i);

    await userEvent.type(input, 'teste');

    expect(mockedOnChange).toBeCalledTimes(5);
  });

  it('should be able to render leftAdornment', () => {
    render(
      <Input
        label='E-mail'
        id='element'
        placeholder='test'
        leftAdornment={<button>Teste</button>}
      />,
    );

    const leftAdornment = screen.getByRole('button');

    expect(leftAdornment).toBeInTheDocument();
  });

  it('should be able to render rightAdornment', () => {
    render(
      <Input
        label='E-mail'
        id='element'
        placeholder='test'
        rightAdornment={<button>Teste</button>}
      />,
    );

    const rightAdornment = screen.getByRole('button');

    expect(rightAdornment).toBeInTheDocument();
  });

  it('should render a description if is passed to the component', () => {
    render(<Input description='teste' label='E-mail' />);

    const description = screen.getByText(/teste/i);

    expect(description).toBeInTheDocument();
  });

  it('should render error', () => {
    render(<Input error label='Email' description='generic error' />);

    const error = screen.getByRole('alert');

    expect(error).toBeInTheDocument();
  });
});
