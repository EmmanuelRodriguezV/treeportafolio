import React from "react";
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Environment } from '@react-three/drei'
import Model from '../../Models/Taza';
import Background from '../../Models/fondo.jpg';
import './CanvasParent.css'

export default function CanvasParent() {

  var bg = require('../../Models/fondo.jpg');
  return (
    <div className="full-height">
    <Canvas
      shadows
      concurrentcamera={{ position: [0, 0, 2], fov: 50 }}
    >
       <ambientLight intensity={0.2} />
      <directionalLight />
      <Suspense fallback={null}>
        <Model />
        <Environment preset="sunset" background></Environment>
      </Suspense>
    </Canvas>
    </div>
  );
}
