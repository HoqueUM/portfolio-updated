import { Inter } from 'next/font/google';
import'./globals.scss';
import './styles/dots.scss';
import './styles/grid.scss'
import React from 'react'
import Home from './components/ui/Home';
import Timeline from './components/ui/Timeline';
import Moving from './components/ui/Moving';
import NavBar from './components/ui/NavBar';
import About from './components/ui/About';
import Skills from './components/ui/Skills';
import Card from './components/model/Card';
import ProjectCard from './components/model/ProjectCard';
//<div className='bg-gradient-to-br from-[#FB7B8E] from-10% via-fuchsia-400 via-30% to-[#031B88] to-90% border-2 sm:w-[40rem] lg:w-[75rem] h-screen backdrop-blur-sm z-50 rounded-3xl'></div>
const inter = Inter({ weight: "400", subsets: ["latin"] });

export default function Page() {
  const projects = [
    {
      image: 'favicon.png',
      name: 'Project Name',
      description: 'This is a brief description of the project.',
      skills: ['React', 'Next.js', 'Tailwind CSS'],
      link: 'https://github.com/HoqueUM/portfolio-updated',
    },
    // Add more projects here
  ];
  return (

    <main className={inter.className}>   
      <NavBar />
      <div id='home'>
      <Home />
      </div>
      
      <div className='flex justify-center items-center py-32 bg-black' id='experience'>
        <Timeline />
      </div>
      <div id='skills'>
      <Skills />
      </div>
      <div className='flex flex-col h-screen justify-center items-center bg-black text-secondary-color text-center' id='projects'>
        
        <p className='mb-2'> ✅ Complete ✅</p>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            name={project.name}
            description={project.description}
            skills={project.skills}
            link={project.link}
          />
        ))}
        <p className='mb-2'> ⌛ Coming soon ⌛</p>
        <p>Stay tuned to see what I&apos;m working on!</p>
            </div>
      <div id='about'>
      <About />
      </div>
      
      <footer className='flex bg-black justify-center py-2 text-secondary-color text-center'>Made with ❤️ by Rahul Hoque</footer>
    </main>
  );
}
