import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Button } from './Button';
import { render, screen, userEvent } from '@/test/utils';

describe('Button', () => {
  const onClick = vi.fn();
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Should render', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Should forward button props', () => {
    render(<Button disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('Should run onClick when clicked', async () => {
    render(<Button onClick={onClick} />);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
