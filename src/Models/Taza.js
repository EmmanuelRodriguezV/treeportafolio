/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from 'react'
import { useGLTF,OrbitControls ,Box,TrackballControls } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('./taza.gltf')
  return (
    <>
    <group ref={group} {...props} dispose={null}>
     
      <mesh
        scale={1}
        geometry={nodes.tea_mug.geometry}
        material={materials.teamug}
        position={[0, 0, 0]}
        rotation={[0, 1, 0]}  
      />
    </group>
    <TrackballControls />
    </>
  )
}
/*
material={materials.teamug}
 */
useGLTF.preload('./taza.gltf')
