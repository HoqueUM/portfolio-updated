'use client';
import React, { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Shapes from '../model/Shapes';
import { Environment, Loader } from '@react-three/drei'
import { useMotionValue, useSpring } from "framer-motion"

export default function Index() {

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothMouse = {
    x: useSpring(mouse.x, {stiffness: 75, damping: 100, mass: 3}),
    y: useSpring(mouse.y, {stiffness: 75, damping: 100, mass: 3})
  }

  const manageMouse = (e: MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth
    const y = clientY / innerHeight
    mouse.x.set(x);
    mouse.y.set(y);
  }

  useEffect( () => {
    window.addEventListener("mousemove", manageMouse)
    return () => window.removeEventListener("mousemove", manageMouse)
  }, [manageMouse])

  return (
    <div className='absolute p-0 m-0 top-0 w-0' style={{ width: '100%', height: '100%' }}>
    <Canvas orthographic camera={{position: [0, 0, 200], zoom: 6}}>
        <Suspense fallback={null}>
        <Shapes mouse={smoothMouse}/>
        <Environment  preset="studio"/>
        </Suspense>
    </Canvas>
    </div>
  )
}