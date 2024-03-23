import {  Post } from '@/components';
import posts from '@/content/post';

const Discussion = ({ className }) => {
  return (
    <section
      className={`flex-grow w-6/12 p-2 xl:p-5 h-[calc(100vh-100px)] ${className}`}
    >
      <h1 className='hidden heading-primary md:block'>Discussion forum</h1>

      <div className='px-0 py-3 space-y-2 xs:space-y-3 md:space-y-4 xl:px-10'>
        <div className='h-[calc(90vh-100px)] xs:h-[calc(90vh-100px)] md:h-[calc(90vh-100px)] lg:h-[calc(90vh-100px)] py-5 space-y-5 overflow-y-scroll'>
          {posts.map((post) => (
            <Post key={post.id} {...post} className="mb-4" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discussion;

