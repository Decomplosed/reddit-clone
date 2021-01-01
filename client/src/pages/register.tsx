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
          <h1 className='mb-2 text-lg font-medium'>Sign Up</h1>
          <p className='mb-10 text-xs'>
            By continuing, you agree to our User Agreement and Privacy Policy
          </p>
          <form>
            <div className='mb-6'>
              <input
                type='checkbox'
                className='mr-1 cursor-pointer'
                id='agreement'
              />
              <label htmlFor='agreement' className='text-xs cursor-pointer'>
                I agree to get emails about cool stuff on Readit
              </label>
            </div>
            <div className='mb-2'>
              <input
                type='text'
                placeholder='Email'
                className='w-full px-3 py-2 bg-gray-100 border border-gray-400 rounded'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
