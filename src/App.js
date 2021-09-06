import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Model from './Models/Taza';

function App() {
  return (
    <div className="App">
      HOLRA
       <Canvas>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
