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
        <div className='w-70'>
          <h1 className='mb-2 text-lg'>Sign Up</h1>
          <p className='mb-10 text-xs'>
            By continuing, you agree to our User Agreement and Privacy Policy
          </p>
          <form>
            <div className='mb-6'>
              <input type='checkbox' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
