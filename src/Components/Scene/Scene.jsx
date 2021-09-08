import React, {Suspense} from 'react';
import { Canvas} from '@react-three/fiber';
import Lights from "./../Scene/Lights";
import Floor from "./../Scene/Floor";
import { softShadows } from '@react-three/drei';
//Models
import Taza from "./../../Models/Taza";
export default function Scene() {

    softShadows();
    return (
        <>
            <Canvas
                colorManagement
                shadowMap
                camera={{ position: [-5, 4, 4], fov: 40 }}>
                <Lights/>
                <Suspense fallback={null}>
                    <Taza></Taza>
                    <Floor/>
                </Suspense>
            </Canvas>
        </>
    )
}

/*
10:29
<planeBufferGeometry args={[3, 5]} />
*/