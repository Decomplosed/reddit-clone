import Head from 'next/head';
import useSWR from 'swr';

import PostCard from '../components/PostCard';

export default function Home() {
  const { data: posts } = useSWR('/posts');

  return (
    <div className='pt-12'>
      <Head>
        <title>Readit</title>
      </Head>
      <div className='container flex pt-4'>
        <div className='w-160'>
          {posts?.map((post) => (
            <PostCard post={post} key={post.identifier} />
          ))}
        </div>
      </div>
    </div>
  );
}
