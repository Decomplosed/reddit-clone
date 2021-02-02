import useSWR from 'swr';
import Sidebar from '../../../components/Sidebar';

export default function Submit() {
  const { data: sub, error } = useSWR();

  return (
    <div className='container flex pt-5'>
      <div className='w-160'></div>
      <Sidebar sub={sub} />
    </div>
  );
}
