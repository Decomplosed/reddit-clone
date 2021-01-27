import { Sub } from '../types';

export default function Sidebar({ sub }: { sub: Sub }) {
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
        </div>
      </div>
    </div>
  );
}
