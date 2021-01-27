import Head from 'next/head';
import { Fragment } from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import Link from 'next/link';

import PostCard from '../components/PostCard';
import { Sub } from '../types';

export default function Home() {
  const { data: posts } = useSWR('/posts');
  const { data: topSubs } = useSWR('/misc/top-subs');

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
        <div className='ml-6 w-80'>
          <div className='bg-white rounded'>
            <div className='p-4 border-b-2'>
              <p className='text-lg font-semibold text-center'>
                Top Communities
              </p>
            </div>
            <div>
              {topSubs?.map((sub: Sub) => (
                <div
                  key={sub.name}
                  className='flex items-center px-4 py-2 text-xs border-b'
                >
                  <div className='overflow-hidden rounded-full'>
                    <Image
                      src={sub.imageUrl}
                      alt='Sub'
                      width={(6 * 16) / 4}
                      height={(6 * 16) / 4}
                    />
                    <Link href={`/r/${sub.name}`}>
                      <a className='font-bold hover:cursor-pointer'>
                        /r/{sub.name}
                      </a>
                      <p className='ml-auto font-medium'>{sub.postCount}</p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
