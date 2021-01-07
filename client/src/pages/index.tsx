import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

import RedditLogo from '../images/reddit.svg';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Readit</title>
      </Head>
      <div className='fixed inset-x-0 top-0 z-10 flex items-center justify-center h-12'>
        {/*Logo and title*/}
        <div className='flex items-center'>
          <Link href='/'>
            <a>
              <RedditLogo className='w-8 h-8 mr-2' />
            </a>
          </Link>
          <span className='text-2xl font-semibold'></span>
        </div>
        {/* Search Input */}
        {/* Auth buttons */}
      </div>
    </div>
  );
}
