import React from 'react'
import RH from './image.png';
import Image from 'next/image'

export default function NavBar() {
    return (
        <div className='fixed top-0 z-50 bg-inherit backdrop-blur-md w-full'>
          <div className=' border-[#606060] border-b-[1px] px-5 lg:px-7.5 xl:px-10 max-lg: py-4'> 
            <nav className='flex static top-[5rem] left-0'>
              <div className='relative z-2 flex space-x-4 font-mono text-[#606060]'>
              <a className='pr-7' href='#hero'>
                <Image src={RH} height={50} width={40} alt='logo'/>
                </a>
              <button className='hover:font-extrabold'>Home</button>
              <button className='hover:font-extrabold'>Resume</button>
              <button className='hover:font-extrabold'>Projects</button>
              <button className='hover:font-extrabold'>About</button>
              </div>
            </nav>
          </div>
        </div>
    );
};