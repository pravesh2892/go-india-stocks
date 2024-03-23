import Image from 'next/image';
import { Button } from '@/components';

const Navbar = ({ className }) => {
  return (
    <nav
      className={`flex items-center justify-between gap-10 p-2 px-5 bg-bg-secondary ${className}`}
    >
      <h1 className='text-lg'>
        <a href='/'>
          <Image src='/logo.webp' alt='logo' height={60} width={60} />
        </a>
      </h1>


    
  
      
    </nav>
  );
};

export default Navbar;
