import { GroupCard } from './GroupCard';
import { render, screen } from '@/test/utils';

describe('GroupCard', () => {
  it('should render', () => {
    render(
      <GroupCard src='abcabc' alt='imagetest' points={14200} title='escola' />,
    );

    const groupCard = screen.getByText(/escola/i);

    expect(groupCard).toBeInTheDocument();
  });
});
