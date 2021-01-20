import { useRouter } from 'next/router';

export default function Sub() {
  const router = useRouter();

  const subName = router.query.sub;

  return <h1 className='text-5xl'>{router.query.sub}</h1>;
}
