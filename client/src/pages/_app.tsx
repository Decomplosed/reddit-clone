import { Fragment } from 'react';
import { AppProps } from 'next/app';
import Axios from 'axios';
import { useRouter } from 'next/router';

import '../styles/tailwind.css';

import Navbar from '../components/Navbar';

Axios.defaults.baseURL = 'http://localhost:5005/api';
Axios.defaults.withCredentials = true;

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default App;
