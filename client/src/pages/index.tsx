import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Readit</title>
      </Head>
      <div className='fixed inset-x-0 top-0 z-10 flex items-center justify-center h-12'>
        {/*Logo and title*/}
        {/* Search Input */}
        {/* Auth buttons */}
      </div>
    </div>
  );
}
