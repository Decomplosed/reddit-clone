import { useRouter } from 'next/router';
import useSWR from 'swr';
import PostCard from '../../components/PostCard';

export default function Sub() {
  const router = useRouter();

  const subName = router.query.sub;

  const { data: sub } = useSWR(subName ? `/subs/${subName}` : null);

  let postsMarkup;
  if (!sub) {
  }

  return (
    <div className='container flex pt-5'>
      {sub && <div className='w-160'>{}</div>}
    </div>
  );
}
