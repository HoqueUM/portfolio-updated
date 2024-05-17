import'./globals.scss';
import './styles/dots.scss';
import './styles/grid.scss'
import React from 'react'
import Home from './components/ui/Home';
import Timeline from './components/ui/Timeline';
import Moving from './components/ui/Moving';
import NavBar from './components/ui/NavBar';
import About from './components/ui/About';
//<div className='bg-gradient-to-br from-[#FB7B8E] from-10% via-fuchsia-400 via-30% to-[#031B88] to-90% border-2 sm:w-[40rem] lg:w-[75rem] h-screen backdrop-blur-sm z-50 rounded-3xl'></div>
export default function Page() {
  return (

    <main>   
      <NavBar />
      <div id='home'>
      <Home />
      </div>
      
      <div className='flex justify-center items-center py-32 dots' id='experience'>
        <Timeline />
      </div>
      
      <div className='flex flex-col h-screen justify-center items-center bg-black text-secondary-color text-center' id='projects'>
      <Moving />
        <p className='mb-2 '> ⌛ Coming soon ⌛</p>
        <p>Stay tuned to see what I&apos;m working on!</p>
            </div>
      <div id='about'>
      <About />
      </div>
      
      <footer className='flex bg-black justify-center py-2 text-secondary-color text-center'>Made with ❤️ by Rahul Hoque</footer>
    </main>
  );
}
