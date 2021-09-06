import './App.css';
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Environment } from '@react-three/drei'

import Model from './Models/Taza';
import Pencil from './Models/Pencil';
import fondo from './Models/fondo.jpg'

function App() {
  return (
    <div className="App">
       <Canvas shadows concurrentcamera={{ position: [0, 0, 4], fov: 50 }}>
          <pointLight position={[10, 10, 10]} color={0xffffff} intensity={0.8} />
         <Suspense fallback={null}>
           <Model />
           <Environment preset="sunset" background></Environment>
      </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
