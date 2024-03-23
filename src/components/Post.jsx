import { FaRegHeart } from 'react-icons/fa';
import { BiComment, BiShareAlt } from 'react-icons/bi';
import { FiEye } from 'react-icons/fi';
import { Card, UserProfile } from '.';
import { convertToK, timeSince } from '@/utils/helper';
import Image from 'next/image';

const Post = ({ tag, time, user, post, actions }) => {
  return (
    <Card className='p-2 px-5 space-y-3'>
      <header className='flex justify-end ml-auto text-sm font-semibold text-blue-500'>
        {timeSince(time)}
      </header>
      <figcaption className='flex gap-2'>
        <div className='w-[50px]'>
          <UserProfile src={user.img} />
        </div>
        <div className='p-2 py-1 space-y-2 md:flex-grow'>
          <div className="flex items-center gap-2">
            <h3 className='font-bold capitalize'>{user.name}</h3>
            <span className='text-xs xl:text-sm h-6 min-w-fit bg-blue-800 rounded-[100px] px-4 text-white'>
              Section 2
            </span>
          </div>
          <p>{post.caption}</p>

          <footer className='flex justify-between mt-1 text-sm font-semibold'>
            <div className='post-btn'>
              <button>
                <FaRegHeart className='md:text-xl' />
              </button>
              {convertToK(actions.likes)}
            </div>
            <div className='post-btn'>
              <FiEye className='md:text-xl' />
              {convertToK(actions.views)}
            </div>
            <div className='post-btn'>
              <BiComment className='md:text-xl' />
              {convertToK(actions.comments)} Comments
            </div>
            <div className='post-btn'>
              <BiShareAlt className='md:text-xl' />
              Share
            </div>
          </footer>
        </div>
      </figcaption>
    </Card>
  );
};

export default Post;
