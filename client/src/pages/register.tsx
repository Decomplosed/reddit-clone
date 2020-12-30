import Head from 'next/head';

export default function Register() {
  return (
    <div className='flex'>
      <Head>
        <title>Register</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div
        className='w-40 h-screen'
        style={{ backgroundImage: "url('/images/bricks.jpg')" }}
      ></div>
    </div>
  );
}
