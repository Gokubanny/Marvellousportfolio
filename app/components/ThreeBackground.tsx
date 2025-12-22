"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

interface FloatingShapeProps {
  position: [number, number, number];
  scale: number;
  color: string;
}

function FloatingShape({ position, scale, color }: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.6}
          wireframe
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const temp = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const i3 = i * 3;
      temp[i3] = (Math.random() - 0.5) * 20;
      temp[i3 + 1] = (Math.random() - 0.5) * 20;
      temp[i3 + 2] = (Math.random() - 0.5) * 20;
    }
    return temp;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#9ECAD6"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function ThreeBackground() {
  const shapes = useMemo(() => [
    { position: [2, 1, -5] as [number, number, number], scale: 0.5, color: "#9ECAD6" },
    { position: [-3, -1, -8] as [number, number, number], scale: 0.8, color: "#ABDFE8" },
    { position: [1, -2, -6] as [number, number, number], scale: 0.6, color: "#84D9E4" },
    { position: [-2, 2, -7] as [number, number, number], scale: 0.4, color: "#AADCD4" },
    { position: [4, 0, -9] as [number, number, number], scale: 0.7, color: "#9ECAD6" },
    { position: [-1, -3, -5] as [number, number, number], scale: 0.3, color: "#ABDFE8" },
  ], []);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{
          position: [0, 0, 1],
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.4} />
        
        <Particles />
        
        {shapes.map((shape, index) => (
          <FloatingShape
            key={index}
            position={shape.position}
            scale={shape.scale}
            color={shape.color}
          />
        ))}
      </Canvas>
    </div>
  );
}