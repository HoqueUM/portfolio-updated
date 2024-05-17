import React from 'react'
import  TextRevealCardPreview  from './Reveal';
import { BackgroundBeams } from "../../utils/background-beams";

export default function Home() {
  return (
    <div className='flex flex-col justify-end z-50 px-2 h-[41rem] md:h-[51rem] lg:h-[61rem] xl:h-[71rem] 2xl:h-[81rem] bg-black'> {/* Increase height here */}
         <h1 className=' text-white animate-fade-right animate-delay-[1000ms] ease-in text-7xl md:text-9xl lg:text-[11rem] xl:text-[13rem] 2xl:text-[15rem] leading-none'>Rahul</h1>
         <h1 className=' text-black animate-fade-right ease-in animate-delay-[1000ms] text-7xl md:text-9xl lg:text-[11rem] xl:text-[13rem] 2xl:text-[15rem] outline text-transparent leading-none'>Hoque</h1> 
         <BackgroundBeams className='h-[30rem] md:h-[40rem] lg:h-[50rem] xl:h-[60rem] 2xl:h-[70rem]' />
         <div className='h-[5rem] md:h-[10rem] lg:h-[15rem] xl:h-[20rem] 2xl:h-[25rem]'></div> {/* Add spacer div here */}

    </div>
  )
}