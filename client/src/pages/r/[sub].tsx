import { useRouter } from 'next/router';
import useSWR from 'swr';
import PostCard from '../../components/PostCard';

export default function Sub() {
  const router = useRouter();

  const subName = router.query.sub;

  const { data: sub } = useSWR(subName ? `/subs/${subName}` : null);

  let postsMarkup;
  if (!sub) {
    postsMarkup = <p className="text-lg text-center">Loading...</p>
  } else if (sub.posts.length === 0) {}

  return (
    <div className='container flex pt-5'>
      {sub && <div className='w-160'>{}</div>}
    </div>
  );
}
