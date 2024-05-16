"use client";
import * as THREE from 'three';
import { useRef, ReactNode} from 'react';
import { CubeTextureLoader } from 'three';
import { useFrame, useThree } from "react-three-fiber";
import { useTexture, Icosahedron } from '@react-three/drei';
import { MeshDistortMaterial, Center } from '@react-three/drei';

interface Props {
  children?: ReactNode
}

// https://codesandbox.io/p/sandbox/text3d-alignment-x6obrb?file=%2Fsrc%2FApp.js%3A15%2C1
// https://github.com/gsimone/r3f-bubbles/tree/master
// https://codepen.io/edmundojr/pen/xOYJGw
// https://blog.olivierlarose.com/
export default function MainSphere({ children}: Props) {
    const bumpMap = useTexture('/bump.jpg');
    const loder = new CubeTextureLoader();
    const envMap = loder.load(['/px2.png', '/nx2.png', '/py2.png', '/ny2.png', '/pz2.png', '/nz2.png']);
   
    const main = useRef<THREE.Mesh>(null);
  
    useFrame(({ clock, pointer }) => {
      if (main.current) {
        main.current.rotation.z = clock.getElapsedTime();
        main.current.rotation.y = THREE.MathUtils.lerp(main.current.rotation.y, pointer.x * Math.PI, 0.1);
        main.current.rotation.x = THREE.MathUtils.lerp(main.current.rotation.x, pointer.y * Math.PI, 0.1);
      }
    });
    const ref = useRef<THREE.Mesh>(null);
    const { width, height } = useThree(state => state.viewport);
    const margin = 0.5;
    // add animation:
    //onclick = startposition = 0, 0, 0. endposition = width / 2 - margin, -height / 2 + margin, 0
    // start size = 1, 4, end size = .15, 4
    // start an audio when clicked.
  
    return (
      <>
      <Center position={[0,-.4,0]}>
      <mesh
        ref={ref}
        position={[0, 0, 0]}
        >
          <MeshDistortMaterial
            color={'#000000'}
            roughness={0.1}
            metalness={1}
            bumpScale={0.005}
            clearcoat={1}
            clearcoatRoughness={1}
            radius={1}
            distort={0.4}
            envMap={envMap}
            bumpMap={bumpMap}
          />
        </mesh> 
       <Icosahedron args={[1, 4]}ref={main} position={[0, 0, 0]}>
       <MeshDistortMaterial
      color={'#0d0d0d'}
      roughness={0.1}
      metalness={1}
      bumpScale={10}
      clearcoat={1}
      clearcoatRoughness={1}
      radius={1}
      distort={0.4}
      envMap={envMap}
      bumpMap={bumpMap}
    />
       </Icosahedron>
       </Center>
      {children}
      </>

    )
  }