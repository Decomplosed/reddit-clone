import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export default function PostPage() {
  const router = useRouter();
  const { identifier, sub, slug } = router.query;

  const { data: post } = useSWR(
    identifier && slug ? `/posts/${identifier}/${slug}` : null,
  );

  return (
    <>
      <Head>
        <title></title>
      </Head>
    </>
  );
}
