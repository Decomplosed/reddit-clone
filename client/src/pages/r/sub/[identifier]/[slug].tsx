import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '../../../../types';
import Sidebar from '../../../../components/Sidebar';
import classNames from 'classnames';
import Axios from 'axios';
import { authState } from '../../../../context/auth';

export default function PostPage() {
  const router = useRouter();
  const { identifier, sub, slug } = router.query;

  const { data: post, error } = useSWR<Post>(
    identifier && slug ? `/posts/${identifier}/${slug}` : null,
  );

  if (error) router.push('/');

  const vote = async (value: number) => {
    try {
      const res = Axios.post('/misc/vote', {
        identifier,
        slug,
        value,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <Link href={`/r/${sub}`}>
        <a>
          <div className='flex items-center w-full h-20 p-8 bg-blue-500'>
            {post && (
              <div className='w-8 h-8 mr-2 overflow-hidden rounded-full'>
                <Image
                  src={post.sub.imageUrl}
                  height={(8 * 16) / 4}
                  width={(8 * 16) / 4}
                />
              </div>
            )}
            <p className='text-xl font-semibold text-white'>/r/{sub}</p>
          </div>
        </a>
      </Link>
      <div className='container pt-5 xlex'>
        <div className='w-160'>
          <div className='bg-white-rounder'>
            {post && (
              <div className='flex'>
                <div className='w-10 py-3 text-center bg-gray-200 rounded-l'>
                  <div
                    className='w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-300 hover:text-red-500'
                    onClick={() => vote(1)}
                  >
                    <i
                      className={classNames('icon-arrow-up', {
                        'text-red-500': post.userVote === 1,
                      })}
                    />
                  </div>
                  <p className='text-xs font-bold'>{post.voteScore}</p>
                  <div
                    className='w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-300 hover:text-blue-600'
                    onClick={() => vote(-1)}
                  >
                    <i
                      className={classNames('icon-arrow-down', {
                        'text-blue-600': post.userVote === -1,
                      })}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {post.sub && <Sidebar sub={post.sub} />}
      </div>
    </>
  );
}
