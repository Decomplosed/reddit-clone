import { useRouter } from 'next/router';
import Head from 'next/head';
import useSWR from 'swr';
import PostCard from '../../components/PostCard';

export default function User() {
  const router = useRouter();
  const username = router.query.username;

  const { data, error } = useSWR<any>(username ? `/users/${username}` : null);

  if (error) router.push('/');

  return (
    <>
      <Head>
        <title>{data?.user.username}</title>
      </Head>
      {data && (
        <div className='container flex pt-5'>
          <div className='w-160'>
            {data.submissions.map((submission: any) => {
              if (submission.type === 'Post') {
                const post = submission;
                return <PostCard key={post.identifier} post={post} />;
              }
            })}
          </div>
        </div>
      )}
    </>
  );
}
