import React from "react";
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Environment } from '@react-three/drei'
import Model from '../../Models/Taza';
export default function CanvasParent() {
  return (
    <Canvas
      className="canvasParent"
      shadows
      concurrentcamera={{ position: [0, 0, 4], fov: 50 }}
    >
      <Suspense fallback={null}>
        <Model />
        <Environment preset="sunset" background></Environment>
      </Suspense>
    </Canvas>
  );
}
