import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";
import Model from "../../Models/Taza";
import "./CanvasParent.css";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";

export default function CanvasParent() {
  const [width, height] = useWindowSize();
  const onlyWidth = useWindowWidth();
  const onlyHeight = useWindowHeight();
  useEffect(() => {});
  return (
    <Canvas
      style={{ width: onlyWidth + "px", height: onlyHeight + "px" }}
      shadows
      concurrentcamera={{ position: [0, 0, 4], fov: 50 }}
    >
      <ambientLight intensity={0} />
      <spotLight position={[1, 10, 10]} angle={0.60} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
}
