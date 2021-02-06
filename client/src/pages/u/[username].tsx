import { useRouter } from 'next/router';
import Head from 'next/head';
import useSWR from 'swr';

export default function User() {
  const router = useRouter();
  const username = router.query.username;

  const { data, error } = useSWR<any>(username ? `/users/${username}` : null);

  if (error) router.push('/');

  return <></>;
}
