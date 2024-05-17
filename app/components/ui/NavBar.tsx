'use client';
import React from 'react'
import RH from './image.png';
import Image from 'next/image'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { Link } from 'react-scroll';
import '../../styles/active.scss'

export default function NavBar() {
    return (
        <div className='fixed top-0 z-50 bg-inherit backdrop-blur-md w-full'>
          <div className=' border-[#606060] border-b-[1px] px-5 lg:px-7.5 xl:px-10 max-lg: py-4'> 
            <nav className='flex justify-between static top-[5rem] left-0'>
              <div className='relative z-2 flex space-x-4 font-mono text-[#606060]'>
                <a className='pr-7' href='#hero'>
                  <Image src={RH} height={40} width={40} alt='logo'/>
                </a>
                <ul className='flex space-x-4'>
                  <button><Link activeClass='active' smooth spy to="home" className='hover:font-extrabold'>Home</Link></button>
                  <button><Link activeClass='active' smooth spy to="experience" className='hover:font-extrabold'>Experience</Link></button>
                  <button><Link activeClass='active' smooth spy to="projects" className='hover:font-extrabold'>Projects</Link></button>
                  <button><Link activeClass='active' smooth spy to="about" className='hover:font-extrabold'>About</Link></button>
                </ul>
              </div>
              <IconContext.Provider value={{ color: 'white' }}>
                <div className='flex space-x-4'>
                  <a href='https://www.linkedin.com/in/rahul-hoque-6a9a6b282/' target="_blank" rel="noopener noreferrer"><FaLinkedin size={20}/></a>
                  <a href='https://github.com/HoqueUM' target="_blank" rel="noopener noreferrer"><FaGithub size={20}/></a>
                </div>
              </IconContext.Provider>
            </nav>
          </div>
        </div>
    );
};