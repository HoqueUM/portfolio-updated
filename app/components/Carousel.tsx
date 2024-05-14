'use client';
import React, { useEffect } from 'react';
import Card from './Card';
import useMeasure from 'react-use-measure';
import { useMotionValue, animate, motion } from 'framer-motion';

export default function Carousel() {
    const cards = [
      <Card key={1} />,
      <Card key={2} />,
      <Card key={3} />,
      <Card key={4} />,
      <Card key={5} />,
      <Card key={6} />,
      <Card key={7} />,
      <Card key={8} />,
    ];  

    let [ref, { width }] = useMeasure();

    const xTranslation = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 8;
        controls = animate(xTranslation, [0, finalPosition], {
            ease: 'linear',
            duration: 25,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
        });
        return controls.stop;
    }, [xTranslation, width]);

    return (
        
      <motion.div className='flex justify-center items-center left-0 gap-4 w-[75rem]' ref={ref}
      style={{ x: xTranslation }}
      >
        {cards}
      </motion.div>
    );
  }