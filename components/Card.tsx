'use client';
import React, { useState } from 'react';
import '@/app/index.scss';
import { motion, AnimatePresence } from 'framer-motion';

export default function Card() {
    const [hover, setHover] = useState(false);
    return (
        <motion.div className='relative overflow-hidden h-[200px] min-h-[300px]  min-w-[300px] backdrop-blur-md z-50 rounded-3xl shadow-xl' style={{backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        >
        <AnimatePresence>
         {hover && (
            <motion.div className='absolute inset-0 flex justify-center items-center'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            >
             
                <div className='absolute bg-black pointer-events-none opacity-35 h-full w-full rounded-3xl'></div>
            </motion.div>
         )} 
         </AnimatePresence>  
        <div className='absolute inset-0 z-10 flex justify-center items-end rounded-3xl top-20 h-[6rem]
        bg-gradient-to-tr from-fuchsia-950 from-30% via-indigo-950 v-30% to-sky-950 to-90%'>
            <div className=' pointer-events-none'>
                <p>Test</p>
            </div>
        </div>
        </motion.div>
    )
}