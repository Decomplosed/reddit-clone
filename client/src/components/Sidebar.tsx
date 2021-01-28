import dayjs from 'dayjs';

import { Sub } from '../types';
import { useAuthState } from '../context/auth';

export default function Sidebar({ sub }: { sub: Sub }) {
  const { authenticated } = useAuthState();

  return (
    <div className='ml-6 w-80'>
      <div className='bg-white rounded'>
        <div className='p-3 bg-blue-500 rounded-t'>
          <p className='font-semibold text-white'>About Community</p>
        </div>
        <div className='p-3'>
          <p className='mb-3 text-md'>{sub.description}</p>
          <div className='flex mb-3 text-sm font-medium'>
            <div className='w-1/2'>
              <p>5.2k</p>
              <p>Members</p>
            </div>
            <div className='w-1/2'>
              <p>150</p>
              <p>Online</p>
            </div>
          </div>
          <p className='my-3'>
            <i className='mr-2 fas fa-birthday-cake' />
            Created {dayjs(sub.createdAt).format('D MMM YYYY')}
          </p>
          {authenticated && ()}
        </div>
      </div>
    </div>
  );
}
