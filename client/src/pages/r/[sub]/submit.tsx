import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Sidebar from '../../../components/Sidebar';
import { Sub } from '../../../types';

export default function Submit() {
  const router = useRouter();
  const { sub: subName } = router.query;

  const { data: sub, error } = useSWR<Sub>(subName ? `/subs/${subName}` : null);

  if (error) router.push('/');

  return (
    <div className='container flex pt-5'>
      <Head>
        <title>Submit to Readit</title>
      </Head>
      <div className='w-160'></div>
      <Sidebar sub={sub} />
    </div>
  );
}
