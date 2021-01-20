import Head from 'next/head';
import { Fragment } from 'react';
import useSWR from 'swr';

import PostCard from '../components/PostCard';

export default function Home() {
  const { data: posts } = useSWR('/posts');

  return (
    <Fragment>
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
    </Fragment>
  );
}
