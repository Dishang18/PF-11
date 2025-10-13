import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// Simple 3D Employee Model (using a public URL for demonstration)
function EmployeeModel(props) {
  // Example: Use a free, generic 3D character model from a CDN
  // You can replace the URL with your own .glb file in public/ if desired
  const { scene } = useGLTF('https://models.babylonjs.com/CesiumMan/glTF/CesiumMan.gltf');
  return <primitive object={scene} scale={1.2} {...props} />;
}

export default function Employee3D() {
  const canvasRef = useRef();
  // Handler for WebGL context loss
  const handleContextLost = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.warn('3D rendering context lost. Please refresh the page.');
    alert('3D rendering context lost. Please refresh the page.');
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.addEventListener('webglcontextlost', handleContextLost, false);
    return () => {
      canvas.removeEventListener('webglcontextlost', handleContextLost, false);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: 320, maxWidth: 400, margin: '0 auto' }} aria-label="3D Employee Model">
      <Canvas
        camera={{ position: [0, 1.5, 3], fov: 40 }}
        style={{ background: 'transparent' }}
        frameloop="demand"
        onCreated={({ gl }) => {
          canvasRef.current = gl.domElement;
        }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 5, 2]} intensity={0.7} />
        <EmployeeModel />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload('https://models.babylonjs.com/CesiumMan/glTF/CesiumMan.gltf');
