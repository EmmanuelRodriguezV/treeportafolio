import React from 'react'
import { Canvas } from '@react-three/fiber'

export default function Scene() {
    return (
        <>
            <Canvas>
                <pointLight position={[10,10,10]}/>
                <mesh>
                    <planeBufferGeometry args={[3, 5]} />
                    <meshStandardMaterial color='brown' />
                </mesh>
            </Canvas>
        </>
    )
}

