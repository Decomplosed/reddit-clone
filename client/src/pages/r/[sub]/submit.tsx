import Head from 'next/head';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import useSWR from 'swr';
import Sidebar from '../../../components/Sidebar';
import { Sub } from '../../../types';

export default function Submit() {
  const [title, setTitle] = useState('');

  const router = useRouter();
  const { sub: subName } = router.query;

  const { data: sub, error } = useSWR<Sub>(subName ? `/subs/${subName}` : null);

  if (error) router.push('/');

  const submitPost = async (event: FormEvent) => {
    event.preventDefault();

    if (title.trim() === '') return;
  };

  return (
    <div className='container flex pt-5'>
      <Head>
        <title>Submit to Readit</title>
      </Head>
      <div className='w-160'>
        <div className='p-4 bg-white rounded'>
          <h1 className='mb-3 text-lg'>Submit a post to /r/{subName}</h1>
          <form onSubmit={submitPost}>
            <div className='relative mb-2'>
              <input
                type='text'
                className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none'
                placeholder='Title'
                maxLength={300}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div className='absolute mb-2 text-sm text-gray-500 select-none'>
                {title.trim().length}/300
              </div>
            </div>
          </form>
        </div>
      </div>
      <Sidebar sub={sub} />
    </div>
  );
}
