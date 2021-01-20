import { useRouter } from 'next/router';

export default function Sub() {
  const router = useRouter();

  return <h1 className='text-5xl'>{router.query.sub}</h1>;
}
