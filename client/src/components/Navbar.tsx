import { Fragment, useState } from 'react';
import Link from 'next/link';
import Axios from 'axios';

import { useAuthState, useAuthDispatch } from '../context/auth';

import RedditLogo from '../images/reddit.svg';
import { Sub } from '../types';

const Navbar: React.FC = () => {
  const [name, setName] = useState('');
  const [subs, setSubs] = useState<Sub[]>([]);

  const { authenticated, loading } = useAuthState();
  const dispatch = useAuthDispatch();

  const logout = () => {
    Axios.get('/auth/logout')
      .then(() => {
        dispatch('LOGOUT');
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const searchSubs = async (subName: string) => {
    setName(subName);

    try {
      const { data } = await Axios.get(`/subs/search/${subName}`);
      setSubs(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='fixed inset-x-0 top-0 z-10 flex items-center justify-center h-12 px-5 bg-white'>
      <div className='flex items-center'>
        <Link href='/'>
          <a>
            <RedditLogo className='w-8 h-8 mr-2' />
          </a>
        </Link>
        <span className='text-2xl font-semibold'>
          <Link href='/'>readit</Link>
        </span>
      </div>
      <div className='flex items-center mx-auto bg-gray-100 border rounded hover:border-blue-500 hover:bg-white'>
        <i className='pl-4 pr-3 text-gray-500 fas fa-search' />
        <input
          type='text'
          className='py-1 pr-3 bg-transparent rounded focus:outline-none w-160'
          placeholder='Search'
          value={name}
          onChange={(e) => searchSubs(e.target.value)}
        />
        <div
          className='absolute left-0 right-0 bg-white'
          style={{ top: '100%' }}
        ></div>
      </div>
      <div className='flex'>
        {!loading &&
          (authenticated ? (
            <button
              className='w-32 py-1 mr-4 leading-5 hollow blue button'
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <Fragment>
              <Link href='/login'>
                <a className='w-32 py-1 mr-4 leading-5 hollow blue button'>
                  Log In
                </a>
              </Link>
              <Link href='/register'>
                <a className='w-32 py-1 leading-5 blue button'>Register</a>
              </Link>
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default Navbar;
