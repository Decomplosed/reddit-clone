import Head from 'next/head';
import { useState } from 'react';

export default function Create() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [error, setError] = useState<Partial<any>>({});

  return (
    <div className='flex bg-white'>
      <Head>
        <title>Create a Community</title>
      </Head>
      <div
        className='h-screen bg-center bg-cover w-36'
        style={{ backgroundImage: "url('/images/bricks.jpg')" }}
      />
      <div className='flex flex-col justify-center pl-6'>
        <div className='w-98'>
          <h1 className='mb-2 text-lg font-medium'>Create a Community</h1>
        </div>
      </div>
    </div>
  );
}
