import Head from 'next/head';
import { Fragment, useState, useEffect } from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import Link from 'next/link';

import PostCard from '../components/PostCard';
import { Sub, Post } from '../types';
import { useAuthState } from '../context/auth';

export default function Home() {
  const [observedPost, setObservedPost] = useState('');
  const { data: posts } = useSWR<Post[]>('/posts');
  const { data: topSubs } = useSWR<Sub[]>('/misc/top-subs');

  const { authenticated } = useAuthState();

  useEffect(() => {
    if (!posts || posts.length === 0) return;

    const id = posts[posts.length - 1].identifier;

    if (id !== observedPost) {
      setObservedPost(id);
    }
  }, [posts]);

  const observeElement = (element: HTMLElement) => {
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting === true) {
        console.log('Reached bottom of post');
        observer.unobserve(element);
      }
    });

    
  };

  return (
    <Fragment>
      <Head>
        <title>Readit</title>
      </Head>
      <div className='container flex pt-4'>
        <div className='w-full px-4 md:w-160 md:p-0'>
          {posts?.map((post) => (
            <PostCard post={post} key={post.identifier} />
          ))}
        </div>
        <div className='hidden ml-6 md:block w-80'>
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
                  <Link href={`/r/${sub.name}`}>
                    <a>
                      <Image
                        src={sub.imageUrl}
                        className='rounded-full cursor-pointer'
                        alt='Sub'
                        width={(6 * 16) / 4}
                        height={(6 * 16) / 4}
                      />
                    </a>
                  </Link>
                  <Link href={`/r/${sub.name}`}>
                    <a className='ml-2 font-bold hover:cursor-pointer'>
                      /r/{sub.name}
                    </a>
                  </Link>
                  <p className='ml-auto font-medium'>{sub.postCount}</p>
                </div>
              ))}
            </div>
            {authenticated && (
              <div className='p-4 border-t-2'>
                <Link href='/subs/create'>
                  <a className='w-full px-2 py-1 blue button'>
                    Create Community
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
