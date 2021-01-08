import Head from 'next/head';

export default function Home() {
  return (
    <div className='pt-12'>
      <Head>
        <title>Readit</title>
      </Head>
      <div className='container'>
        <h1>Recent Posts</h1>
      </div>
    </div>
  );
}
