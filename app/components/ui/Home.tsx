import React from 'react'
import  TextRevealCardPreview  from './Reveal';
import { BackgroundBeams } from "../../utils/background-beams";

export default function Home() {
  return (
    <div>
    <div className='flex flex-col justify-end z-50 px-2 h-[95vh] bg-black'>
         <h1 className=' text-white animate-fade-right animate-delay-[1000ms] ease-in text-9xl leading-none'>Rahul</h1>
         <h1 className=' text-black animate-fade-right ease-in animate-delay-[1000ms] text-9xl  outline text-transparent leading-none'>Hoque</h1> 
         <BackgroundBeams className='h-[70rem]' />
         <div className='h-[1vh]'></div>
    </div>
    

    </div>
  )
}