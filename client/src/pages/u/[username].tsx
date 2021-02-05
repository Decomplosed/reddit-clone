import { useRouter } from 'next/router';
import useSWR from 'swr';

export default function User() {
  const router = useRouter();
  const username = router.query.username;

  return <div></div>;
}
