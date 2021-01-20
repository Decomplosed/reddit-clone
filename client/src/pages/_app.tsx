import { AppProps } from 'next/app';
import Axios from 'axios';
import { useRouter } from 'next/router';
import { SWRConfig } from 'swr';

import { AuthProvider } from '../context/auth';

import '../styles/tailwind.css';
import '../styles/icons.css';

import Navbar from '../components/Navbar';

Axios.defaults.baseURL = 'http://localhost:5005/api';
Axios.defaults.withCredentials = true;

const fetcher = async (url: string) => {
  try {
    const res = Axios.get(url).then((res) => res.data);
  } catch (error) {
    throw error.response.data;
  }
};

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const authRoutes = ['/register', '/login'];
  const authRoute = authRoutes.includes(pathname);

  return (
    <SWRConfig
      value={{
        fetcher: (url) => fetcher,
        dedupingInterval: 10000,
      }}
    >
      <AuthProvider>
        {!authRoute && <Navbar />}
        <div className={authRoute ? '' : 'pt-12'}></div>
        <Component {...pageProps} />
      </AuthProvider>
    </SWRConfig>
  );
}

export default App;
