import Head from 'next/head';
import { useRouter } from 'next/router';

export default function PostPage() {
  const router = useRouter();
  const { identifier, sub, slug } = router.query;

  return (
    <>
      <Head>
        <title></title>
      </Head>
    </>
  );
}
