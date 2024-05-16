"use client";
import React from "react";
import { BackgroundBeams } from "../../utils/background-beams";
import Index from "./Canvas1";

export default function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
    <div className='flex flex-col justify-end z-50 px-2 h-[41rem]'>
         <h1 className=' text-white animate-fade-right ease-in text-[12rem] leading-none'>Rahul</h1>
         <h1 className=' text-black animate-fade-right ease-in text-[12rem] outline text-transparent leading-none'>Hoque</h1>
    </div>
      <Index />
      <BackgroundBeams />
    </div>
  );
}
