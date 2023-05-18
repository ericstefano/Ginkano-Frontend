import { vi } from 'vitest';
import { Input } from './Input';
import { render, screen, userEvent } from '@/test/utils';

describe('Component: Input', () => {
  it('should be able to render', () => {
    render(<Input label='E-mail' id='element' placeholder='test' />);

    const componentUnderTest = screen.getByPlaceholderText(/test/i);

    expect(componentUnderTest).toBeInTheDocument();
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

    const componentUnderTest = screen.getByPlaceholderText(/test/i);

    await userEvent.type(componentUnderTest, 'teste');

    expect(mockedOnChange).toBeCalledTimes(5);
  });

  it('should be able to render leftAdornment', () => {
    render(
      <Input
        label='E-mail'
        id='element'
        placeholder='test'
        leftAdornment={<div data-testid='left'>Glubis Glubis</div>}
      />,
    );

    //    const componentUnderTest = screen.getByPlaceholderText(/test/i);

    //    const leftAdornment = within(componentUnderTest).getByTestId('left'); ??
    const leftAdornment = screen.getByTestId('left');

    expect(leftAdornment).toBeInTheDocument();
  });

  it('should be able to render rightAdornment', () => {
    render(
      <Input
        label='E-mail'
        id='element'
        placeholder='test'
        rightAdornment={<div data-testid='right'>Glubis Glubis</div>}
      />,
    );

    const rightAdornment = screen.getByTestId('right');

    expect(rightAdornment).toBeInTheDocument();
  });

  it('should render a description if is passed to the component', () => {
    render(<Input description='teste' label='E-mail' />);

    const componentUnderTest = screen.getByText(/teste/i);

    expect(componentUnderTest).toBeInTheDocument();
  });
});
