import React from "react";
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Environment } from '@react-three/drei'
import Model from '../../Models/Taza';
import Background from '../../Models/fondo.jpg';
import Scene from '../Scene/Scene';

import './CanvasParent.css'

export default function CanvasParent() {
  return (
    <div className="full-height">
      <Scene/>
    </div>
  );
}

/*
var bg = require('../../Models/fondo.jpg');

<Canvas
        shadows
        concurrentcamera={{ position: [0, 0, 4], fov: 50 }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight />
        <Suspense fallback={null}>
          <Model/>
          <Environment preset="sunset" background></Environment>
        </Suspense>
      </Canvas>
*/
