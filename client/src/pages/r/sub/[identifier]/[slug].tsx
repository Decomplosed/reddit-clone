import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export default function PostPage() {
  const router = useRouter();
  const { identifier, sub, slug } = router.query;

  const { data: post } = useSWR(`/posts/${identifier}/${slug}`);

  return (
    <>
      <Head>
        <title></title>
      </Head>
    </>
  );
}
