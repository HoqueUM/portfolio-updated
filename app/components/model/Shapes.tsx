'use client';
import React, { useEffect, useState, useRef } from "react";
import { useGLTF, Float } from "@react-three/drei";
import { useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { MeshStandardMaterial, PointLight } from "three";

export default function Shapes({mouse}: {mouse: any}) {
  const [activeShape, setActiveShape] = useState(1);

  useEffect( () => {
    setTimeout( () => {
      if(activeShape == 11){
        setActiveShape(1)
      }
      else{
        setActiveShape(activeShape + 1)
      }
    }, 2000)
  }, [activeShape])

  const { nodes } = useGLTF("/media/floating_shapes4.glb");
  return (
    <>
    <ambientLight>
    <group position={[60, 0, 0]}>
    <Mesh node={nodes.Sphere001} multiplier={2.4} mouse={mouse} isActive={activeShape == 1} color={'#0033cc'}/> {/* Blue */}
<Mesh node={nodes.Sphere002} multiplier={2.4} mouse={mouse} isActive={activeShape == 2} color={'#6600cc'}/> {/* Purple */}
<Mesh node={nodes.Cylinder002} multiplier={1.2} mouse={mouse} isActive={activeShape == 3} color={'#cca000'}/> {/* Yellow */}
<Mesh node={nodes.Sphere003} multiplier={1} mouse={mouse} isActive={activeShape == 4} color={'#cc0099'}/> {/* Pink */}
<Mesh node={nodes.Cylinder003} multiplier={1.8} mouse={mouse} isActive={activeShape == 5} color={'#cc6600'}/> {/* Orange */}
<Mesh node={nodes.Cylinder005} multiplier={1.8} mouse={mouse} isActive={activeShape == 6} color={'#0033cc'}/> {/* Blue */}
<Mesh node={nodes.Cube002} multiplier={2} mouse={mouse} isActive={activeShape == 7} color={'#6600cc'}/> {/* Purple */}
<Mesh node={nodes.Cylinder006} multiplier={1.2} mouse={mouse} isActive={activeShape == 8} color={'#cca000'}/> {/* Yellow */}
<Mesh node={nodes.Cylinder007} multiplier={1.6} mouse={mouse} isActive={activeShape == 9} color={'#cc0099'}/> {/* Pink */}
<Mesh node={nodes.Cylinder009} multiplier={1.8} mouse={mouse} isActive={activeShape == 10} color={'#cc6600'}/> {/* Orange */}
<Mesh node={nodes.Sphere} multiplier={1.5} mouse={mouse} isActive={activeShape == 11} color={'#0033cc'}/> {/* Blue */}
    </group>
    </ambientLight>
    </>
  );
}

useGLTF.preload("/medias/floating_shapes4.glb");

function Mesh({node, multiplier, mouse, isActive, color}: {node: any, multiplier: any, mouse: any, isActive: any, color: any}) {
  const { geometry, rotation, position, scale } = node;
  console.log(position, scale);
  const a = multiplier / 2;
  const rotationX = useTransform(mouse.x, [0,1], [rotation.x - a, rotation.x + a]);
  const rotationY = useTransform(mouse.y, [0,1], [rotation.y - a, rotation.y + a]);
  const positionX = useTransform(mouse.x, [0,1], [position.x - multiplier * 2, position.x + multiplier * 2]);
  const positionY = useTransform(mouse.y, [0,1], [position.y + multiplier * 2, position.y - multiplier * 2])
  const mesh = useRef()

  const getRandomMultiplier = () => {
    return Math.floor(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1)
  }

  return (
    <Float>
      <motion.mesh
        castShadow={true}
        receiveShadow={true}
        geometry={geometry}
        material={new MeshStandardMaterial({ color: color})}
        position={position}
        rotation={rotation}
        scale={scale }
        rotation-y={rotationX}
        rotation-x={rotationY}
        position-x={positionX}
        position-y={positionY}
        animate={{rotateZ: isActive ? rotation.z + getRandomMultiplier() : null}}
        transition={{type: "spring", stiffness: 75, damping: 100, mass: 3}}
      />
    </Float>
  )
}