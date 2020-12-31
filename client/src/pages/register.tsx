import Head from 'next/head';

export default function Register() {
  return (
    <div className='flex'>
      <Head>
        <title>Register</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div
        className='w-40 h-screen bg-center bg-cover'
        style={{ backgroundImage: "url('/images/bricks.jpg')" }}
      />
      <div className='flex flex-col justify-center pl-6'>
        <h1 className='mb-2 text-lg'>Sign Up</h1>
        <p className="mb-10 text-xs"></p>
      </div>
    </div>
  );
}
