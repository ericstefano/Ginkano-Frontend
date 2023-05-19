import { Checkbox } from './Checkbox';
import { render, screen, userEvent } from '@/test/utils';

describe('Checkbox', () => {
  it('should be able to render', () => {
    render(<Checkbox label='teste' />);

    const label = screen.getByLabelText(/teste/i);

    expect(label).toBeInTheDocument();
  });

  it('should check on click on label', async () => {
    render(<Checkbox label='teste' />);

    const label = screen.getByLabelText(/teste/i);

    await userEvent.click(label);

    expect(label).toBeChecked();
  });

  it('should render an error alert', () => {
    render(<Checkbox label='teste' description='generic error' error />);

    const error = screen.getByRole('alert');

    expect(error).toBeInTheDocument();
  });
});
