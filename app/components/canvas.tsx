'use client';
import { Canvas } from '@react-three/fiber';
import MainSphere from '@/app/components/MainSphere';

export default function CanvasObject() {
  return (
  <div className='absolute z-40 p-0 m-0 top-0 left-0' style={{ width: '100%', height: '100%' }}>
    <Canvas  camera={{ position: [0, 0, 3] }}
      gl={{ powerPreference: 'high-performance', alpha: true, antialias: false, stencil: false, depth: false }}
      color={'#000000'}
      >
      <MainSphere />
    </Canvas>
  </div>
  )
}