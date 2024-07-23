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
import favicon from './favicon.png';
import wordscapes from '../public/static/wordscapes.png';
import rmp from '../public/static/rmp.png';
import github from '../public/static/github.png';
import lightgg from '../public/static/lightgg.jpg';
import mich from '../public/static/mich.png';
import hackgr from '../public/static/hackgr.png';
import followups from '../public/static/followups.png';
import mal from '../public/static/mal.jpg';
import newdropz from '../public/static/newdropz.png';
import YouTube from '../public/static/YouTube.jpg';
import EfficientFrontier from '../public/static/EfficientFrontier.jpg';

//<div className='bg-gradient-to-br from-[#FB7B8E] from-10% via-fuchsia-400 via-30% to-[#031B88] to-90% border-2 sm:w-[40rem] lg:w-[75rem] h-screen backdrop-blur-sm z-50 rounded-3xl'></div>
const inter = Inter({ weight: "400", subsets: ["latin"] });

export default function Page() {
  
  const complete = [
    {
      image: {
        src: wordscapes.src,
        height: wordscapes.height,
        width: wordscapes.width
      },
      name: 'Wordscapes Solver',
      description: 'A solver for the popular mobile game Wordscapes. This project uses permutations to find all possible words that can be made from a given set of letters. Cross-checked against the Scrabble dictionary to ensure validity.',
      skills: ['Next.js', 'Tailwind CSS', 'Itertools'],
      link: 'https://wordscapes-solver-tau.vercel.app/',
    },
    {
      image: {
        src: rmp.src,
        height: rmp.height,
        width: rmp.width 
      },
      name: 'rMp',
      description: 'A RateMyProfessor extension that allows students to view professor ratings directly on the course registration page. This project uses the RateMyProfessor GraphQL API to fetch professor ratings and display them in a popup.',
      skills: ['JavaScript', 'GraphQL', 'Chrome Extension'],
      link: 'https://github.com/HoqueUM/rMp',
    },
    {
      image: {
        src: mal.src,
        height: mal.height,
        width: mal.width
      },
      name: 'MAL Dataset',
      description: 'A complete dataset for the popular anime website MyAnimeList as of January 2024. This project uses webscraping to fetch data from the website and store it in a CSV file.',
      skills: ['Webscraping', 'Pandas', 'BeautifulSoup', 'CSV'],
      link: 'https://www.kaggle.com/datasets/yoursimpcard/my-anime-list-2024',
    },
    {
      image: {
        src: YouTube.src,
        height: YouTube.height,
        width: YouTube.width
      },
      name: 'YouTube Shorts Generator',
      description: 'A script automating the YouTube shorts creation process. This project combined the Reddit API with the YouTube API to fetch trending posts and convert them into shorts.',
      skills: ['Reddit API', 'YouTube API', 'Python'],
      link: 'https://github.com/HoqueUM/youtubeshorts',
      },
      {
        image: {
          src: EfficientFrontier.src,
          height: EfficientFrontier.height,
          width: EfficientFrontier.width
        },
        name: 'Random Stock Portfolio Generator',
        description: 'Generates an optimized random stock portfolio based on user input. This project uses stock data and optimize the portfolio using the Efficient Frontier. Then provides the best strategies for each stock.',
        skills: ['Yahoo Finance API', 'Pandas', 'Efficient Frontier', 'Algorithmic Trading'],
        link: 'https://random-portfolio.streamlit.app/',
      },
  ];
  const inProgress = [
    {
      image: {
        src: mich.src,
        height: mich.height,
        width: mich.width
      },
      name: 'MChance',
      description: 'This project uses a dataset of UMich admissions statistics from 2020 to train a model that predicts the chances of admission. Integrated into web using Docker and FastAPI. This project is currently in progress.',
      skills: ['SciKit Learn', 'Pandas', 'FastAPI', 'Docker', 'AWS', 'Next.js', 'Tailwind CSS'],
      link: 'https://mchance.vercel.app/',
    },
    {
      image: {
        src: lightgg.src,
        height: lightgg.height,
        width: lightgg.width
      },
      name: 'LightGG API',
      description: 'An API for the popular website Light.gg. This project uses the Bungie API along with webscraping to to data from Light.gg and display it in a more user-friendly format. This project is currently in progress.',
      skills: ['Webscraping', 'Bungie API', 'BeautifulSoup'],
      link: 'https://github.com/HoqueUM/light-gg-api-outline',
    },
    {
      image: {
        src: mich.src,
        height: mich.height,
        width: mich.width
      },
      name: 'UMich Room Finder',
      description: 'A tool to help students find study rooms at the University of Michigan. This project uses the UMich API to fetch room data and determine room availability. This project is currently in progress.',
      skills: ['UMich API', 'Next.js', 'Tailwind CSS'],
      link: 'https://github.com/HoqueUM/umich-room-finder',
    },
    {
      image: {
        src: mich.src,
        height: mich.height,
        width: mich.width
      },
      name: 'Better Atlas',
      description: 'An improved version of the UMich scheduling tool called Atlas. displays core course details and allows students to view course ratings. This project is currently in progress.',
      skills: ['Cookies', 'JavaScript', 'Chrome Extension' ],
      link: 'https://github.com/HoqueUM/better-atlas',
    },

  ];
  const comingSoon = [
    {
      image: {
        src: hackgr.src,
        height: hackgr.height,
        width: hackgr.width
      },
      name: 'HackGR',
      description: 'Organizing the largest hackathon in West Michigan.',
      skills: ['Hackathons', 'Community Building', 'Sponsorship'],
      link: 'https://hackgr.vercel.app/',
    },
    {
      image: {
        src: newdropz.src,
        height: newdropz.height,
        width: newdropz.width
      },
      name: 'NewDropz',
      description: 'A hub for new snack flavors.',
      skills: ['SaaS', 'Web Development', 'Marketing', 'APIs'],
      link: 'https://newdropz.vercel.app/',
    },
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
      <div className='flex flex-col h-96 justify-center items-center bg-black text-secondary-color text-center' id='projects'>
        <p className='font-bold text-3xl'>Projects</p>
      </div>
      <div className='flex flex-col justify-center items-center bg-black text-secondary-color text-center'>
  <p className='mb-2 text-2xl font-bold pb-4'> ✅ Complete ✅</p>
  <div className='flex flex-wrap justify-center gap-4 pb-20'>
    {complete.map((project, index) => (
      <ProjectCard
        key={index}
        image={project.image}
        name={project.name}
        description={project.description}
        skills={project.skills}
        link={project.link}
      />
    ))}
  </div>
  <br />
  <p className='mb-2 text-2xl font-bold pb-4'> ⌛ In Progress ⌛</p>
  <div className='flex flex-wrap justify-center gap-4 pb-20'>
    {inProgress.map((project, index) => (
      <ProjectCard
        key={index}
        image={project.image}
        name={project.name}
        description={project.description}
        skills={project.skills}
        link={project.link}
      />
    ))}
  </div>
  
  <p className='mb-2 text-2xl font-bold pb-4'>Coming Soon...</p>
  <div className='flex flex-wrap justify-center gap-4'>
    {comingSoon.map((project, index) => (
      <ProjectCard
        key={index}
        image={project.image}
        name={project.name}
        description={project.description}
        skills={project.skills}
        link={project.link}
      />
    ))}
  </div>
</div>
      <div id='about'>
      <About />
      </div>
      
      <footer className='flex bg-black justify-center py-2 text-secondary-color text-center'>Made with ❤️ by Rahul Hoque</footer>
    </main>
  );
}
