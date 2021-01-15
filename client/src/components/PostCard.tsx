import React, { Fragment } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Post } from '../types';
import Axios from 'axios';

interface PostCardProps {
  post: Post;
}

dayjs.extend(relativeTime);

const ActionButton = ({ children }) => {
  return (
    <div className='px-1 py-1 mr-1 text-xs text-gray-400 rounded cursor-pointer hover:bg-gray-200'>
      {children}
    </div>
  );
};

export default function PostCard({ post }: PostCardProps) {
  const vote = async (value) => {
    try {
      const res = Axios.post('/misc/vote', {
        identifier: post.identifier,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div key={post.identifier} className='flex mb-4 bg-white roudned'>
      {/*Vote section*/}
      <div className='w-10 text-center bg-gray-200 rounded-l'>
        <div className='w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-300 hover:text-red-500'>
          <i className='icon-arrow-up'></i>
        </div>
        <div className='w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-300 hover:text-blue-600'>
          <i className='icon-arrow-down'></i>
        </div>
        <p className='text-xs font-bold'>{post.voteScore}</p>
      </div>
      {/*Post data section*/}
      <div className='w-full p-2'>
        <div className='flex items-center'>
          <Link href={`r/${post.subName}`}>
            <Fragment>
              <img
                src='https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
                className='w-6 h-6 mr-1 rounded-full cursor-pointer'
              />
              <a className='text-xs font-bold cursor-pointer hover:underline'>
                /r/{post.subName}
              </a>
            </Fragment>
          </Link>
          <p className='text-xs text-gray-500'>
            <span className='mx-1'>•</span>
            <Link href={`/u/${post.username}`}>
              <a className='mx-1 hover:underline'>/u/{post.username}</a>
            </Link>
            <Link href={post.url}>
              <a className='mx-1 hover:underline'>
                {dayjs(post.createdAt).fromNow()}
              </a>
            </Link>
          </p>
        </div>
        <Link href={post.url}>
          <a className='my-1 text-lg font-medium'>{post.title}</a>
        </Link>
        {post.body && <p className='my-1 text-sm'>{post.body}</p>}
        <div className='flex'>
          <Link href={post.url}>
            <a>
              <ActionButton>
                <i className='mr-1 fas fa-comment-alt fa-xs' />
                <span className='font-bold'>{post.commentCount} Comments</span>
              </ActionButton>
            </a>
          </Link>
          <ActionButton>
            <i className='mr-1 fas fa-share fa-xs' />
            <span className='font-bold'>Share</span>
          </ActionButton>
          <ActionButton>
            <i className='mr-1 fas fa-bookmark fa-xs' />
            <span className='font-bold'>Save</span>
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
