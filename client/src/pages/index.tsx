import Axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Post } from '../types';

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    Axios.get('/posts')
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='pt-12'>
      <Head>
        <title>Readit</title>
      </Head>
      <div className='container flex pt-4'>
        <div className='w-160'>
          {posts.map((post) => (
            <div key={post.identifier} className='flex mb-4 bg-white roudned'>
              {/*Vote section*/}
              <div className='w-10 text-center bg-gray-200 rounded-l'>
                <p>Votes</p>
              </div>
              {/*Post data section*/}
              <div className='w-full p-2'>
                <div className='flex items-center'>
                  <Link href={`r/${post.subName}`}>
                    <img
                      src='https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
                      className='w-6 h-6 mr-1 rounded-full'
                    />
                  </Link>
                  <Link href={`r/${post.subName}`}>
                    <a className='text-xs font-bold hover:underline'>
                      /r/{post.subName}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
