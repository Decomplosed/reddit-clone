import Axios from 'axios';
import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get('/posts').then((res) => {});
  }, []);

  return (
    <div className='pt-12'>
      <Head>
        <title>Readit</title>
      </Head>
      <div className='container flex pr-4'>
        <div className='w-160'></div>
      </div>
    </div>
  );
}
