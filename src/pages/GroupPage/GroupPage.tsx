import { useParams } from 'react-router-dom';
import { Section } from '@/components';

export default function GroupPage() {
  const { token } = useParams();
  return (
    <Section.Root>
      <Section.Content>{token}</Section.Content>
    </Section.Root>
  );
}
