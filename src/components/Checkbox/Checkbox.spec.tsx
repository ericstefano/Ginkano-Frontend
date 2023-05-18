import { Checkbox } from './Checkbox';
import { render, screen, userEvent } from '@/test/utils';

describe('Component: Checkbox', () => {
  it('should be able to render', () => {
    render(<Checkbox label='teste' />);

    const componentUnderTest = screen.getByLabelText(/teste/i);

    expect(componentUnderTest).toBeInTheDocument();
  });

  it('should check on click on label', async () => {
    render(<Checkbox label='teste' />);

    const componentUnderTest = screen.getByLabelText(/teste/i);

    await userEvent.click(componentUnderTest);

    expect(componentUnderTest).toBeChecked();
  });
});
