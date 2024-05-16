import React from 'react'
import RH from './favicon1.svg';

export default function NavBar() {
    return (
        <div className='fixed top-0 z-50 bg-inherit w-full'>
          <div className='flex border-[#606060] px-5 lg:px-7.5 xl:px-10 max-lg: py-4'> 
            <a className='absolute w-[rem] ' href='#hero'>
                <img src={RH} width={40} height={10} alt='logo'/>
            </a>
            <nav className='flex static top-[5rem] left-0 backdrop-blur-md '>
              <div className='relative z-2 flex space-x-4 font-mono text-[#606060]'>
              <button>Home</button>
              <button>Resume</button>
              <button>Projects</button>
              <button>About</button>
              </div>
            </nav>
          </div>
        </div>
    );
};