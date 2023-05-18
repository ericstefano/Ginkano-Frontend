import { Checkbox } from './Checkbox';
import { render, screen } from '@/test/utils';

describe('Component: Checkbox', () => {
  it('should be able to render', () => {
    render(<Checkbox label='teste' />);

    const componentUnderTest = screen.getByLabelText(/teste/i);

    expect(componentUnderTest).toBeInTheDocument();
  });
});
