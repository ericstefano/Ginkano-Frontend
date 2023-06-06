import { useParams } from 'react-router-dom';

export default function GroupPage() {
  const { token } = useParams();
  return <div>{token}</div>;
}
