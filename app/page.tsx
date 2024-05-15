import'./index.scss';
import React from 'react'
import Home from '@/app/components/Home';
import Index from '@/app/components/canvas1';
import HeadComponent from '@/app/components/Head';
import Carousel from '@/app/components/Carousel';
import Item from '@/app/components/Item';
import Carousel2 from './components/carousel2';

//<div className='bg-gradient-to-br from-[#FB7B8E] from-10% via-fuchsia-400 via-30% to-[#031B88] to-90% border-2 sm:w-[40rem] lg:w-[75rem] h-screen backdrop-blur-sm z-50 rounded-3xl'></div>
export default function Page() {
  return (

    <main>   
      <HeadComponent />
      <Index />
      <Home />
      <div className='flex justify-center items-center py-32'>
        <div className='flex justify-center items-center text-gray-400 sm:w-[40rem] lg:w-[75rem] h-screen 
        backdrop-blur-md z-50 rounded-3xl shadow-xl' style={{backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div className='flex justify-center items-center'>
            <p className='max-w-md'>My name is Rahul Hoque and I am a Junior at the University of Michigan studying computer science.
              With a strong foundation in algorithms, machine learning, and web development, I am a driven student that is passionate about what he does.
              Outside of coding, I can be seen at the gym, playing games, or watching anime with my friends!</p>
          </div>
        </div>
      </div>
      <footer className='flex justify-center py-2 text-white'>Made with ❤️ by Rahul Hoque</footer>
    </main>
  );
}
