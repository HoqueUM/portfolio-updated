import React from 'react'
import  TextRevealCardPreview  from './Reveal';
import Wave from './Wave';
import { BackgroundBeams } from "../../utils/background-beams";

export default function Home() {
  return (
    <div className='flex flex-col justify-end z-50 px-2 h-[51rem] bg-black'> {/* Increase height here */}
         <h1 className=' text-white animate-fade-right animate-delay-[1000ms] ease-in text-9xl leading-none'>Rahul</h1>
         <h1 className=' text-black animate-fade-right ease-in animate-delay-[1000ms] text-9xl outline text-transparent leading-none'>Hoque</h1> 
         <BackgroundBeams className='h-[40rem]' />  
         <div className='h-[10rem]'></div> {/* Add spacer div here */}
    </div>
  )
}