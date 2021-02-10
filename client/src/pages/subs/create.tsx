import { GetServerSideProps } from 'next';
import Axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';
import classNames from 'classnames';

export default function Create() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [errors, setErrors] = useState<Partial<any>>({});

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
          <hr />
          <form>
            <div className='my-6'>
              <p className='font-medium'>Name</p>
              <p className='mb-2 text-xs text-gray-500'>
                Community names including capitalization cannot be changed.
              </p>
              <input
                type='text'
                className={classNames(
                  'w-full p-3 border border-gray-200 rounded hover:border-gray-500',
                  { 'border-red-600': errors.name },
                )}
              />
              <small></small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const cookie = req.headers.cookie;
    if (!cookie) throw new Error('Missing auth token cookie');

    await Axios.get('/auth/me', { headers: { cookie } });

    return { props: {} };
  } catch (error) {
    res.writeHead(307, { Location: '/login' }).end();
  }
};
