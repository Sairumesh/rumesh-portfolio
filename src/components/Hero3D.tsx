import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Box, Torus, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export const Hero3D = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    if (sphereRef.current) {
      sphereRef.current.rotation.x = t * 0.3;
      sphereRef.current.rotation.y = t * 0.5;
      sphereRef.current.position.y = Math.sin(t) * 0.3;
    }
    
    if (boxRef.current) {
      boxRef.current.rotation.x = t * 0.4;
      boxRef.current.rotation.z = t * 0.4;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.2;
      torusRef.current.rotation.y = t * 0.6;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9945FF" />

      <Sphere ref={sphereRef} args={[1, 64, 64]} position={[-2, 0, 0]}>
        <MeshDistortMaterial
          color="#00D4FF"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>

      <Box ref={boxRef} args={[1.5, 1.5, 1.5]} position={[2, 0, 0]}>
        <meshStandardMaterial
          color="#9945FF"
          roughness={0.3}
          metalness={0.7}
          emissive="#9945FF"
          emissiveIntensity={0.2}
        />
      </Box>

      <Torus ref={torusRef} args={[1, 0.3, 16, 100]} position={[0, 0, -2]}>
        <meshStandardMaterial
          color="#00D4FF"
          roughness={0.2}
          metalness={0.9}
          emissive="#00D4FF"
          emissiveIntensity={0.3}
        />
      </Torus>
    </group>
  );
};
