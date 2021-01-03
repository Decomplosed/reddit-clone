import '../styles/globals.css';
import { AppProps } from 'next/app';
import Axios from 'axios';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
