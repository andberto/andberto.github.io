import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, Edges } from '@react-three/drei';
import * as THREE from 'three';

export default function PrismaticSphere({ rotation, targetSection }) {
  const meshRef = useRef();
  const edgesRef = useRef();
  const glowRef = useRef();
  const outerGlowRef = useRef();
  const innerCoreRef = useRef();
  
  // Colors for the Tron aesthetic
  const colors = useMemo(() => ({
    cyan: new THREE.Color('#00FFFF'),
    magenta: new THREE.Color('#FF00FF'),
    purple: new THREE.Color('#8B00FF'),
    pink: new THREE.Color('#FF1493'),
    white: new THREE.Color('#FFFFFF')
  }), []);

  // Animate the sphere
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (meshRef.current) {
      // Smooth rotation interpolation
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        rotation,
        0.03
      );
      
      // Add subtle X rotation for more dynamic feel
      meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
      meshRef.current.rotation.z = Math.cos(time * 0.2) * 0.05;
      
      // Subtle floating animation
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.15;
      
      // Color pulse based on time - more dramatic
      const pulse = Math.sin(time * 1.5) * 0.5 + 0.5;
      const color = new THREE.Color().lerpColors(colors.cyan, colors.magenta, pulse);
      
      if (edgesRef.current) {
        edgesRef.current.material.color = color;
        edgesRef.current.material.opacity = 0.9 + Math.sin(time * 3) * 0.1;
      }
    }
    
    // Inner core pulsing
    if (innerCoreRef.current) {
      const corePulse = Math.sin(time * 2) * 0.1 + 0.9;
      innerCoreRef.current.scale.setScalar(corePulse);
      innerCoreRef.current.material.opacity = 0.2 + Math.sin(time * 4) * 0.1;
    }
    
    // Glow pulse
    if (glowRef.current) {
      const glowPulse = Math.sin(time * 2.5) * 0.3 + 0.7;
      glowRef.current.material.opacity = glowPulse * 0.2;
      glowRef.current.rotation.y = time * 0.1;
      glowRef.current.rotation.x = time * 0.05;
    }
    
    // Outer glow rotation
    if (outerGlowRef.current) {
      outerGlowRef.current.rotation.y = -time * 0.15;
      outerGlowRef.current.rotation.z = time * 0.08;
    }
  });

  return (
    <group scale={0.65}>
      {/* Inner glowing core */}
      <mesh ref={innerCoreRef} scale={0.5}>
        <icosahedronGeometry args={[2, 2]} />
        <meshBasicMaterial 
          color="#FFFFFF" 
          transparent 
          opacity={0.3}
        />
      </mesh>
      
      {/* Main icosahedron with edges */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 1]} />
        <meshBasicMaterial 
          color="#050515" 
          transparent 
          opacity={0.4}
          side={THREE.DoubleSide}
        />
        <Edges
          ref={edgesRef}
          threshold={15}
          scale={1}
        >
          <lineBasicMaterial 
            color="#00FFFF" 
            linewidth={3}
            transparent
            opacity={0.95}
          />
        </Edges>
      </mesh>
      
      {/* Inner glow sphere */}
      <mesh ref={glowRef} scale={1.6}>
        <icosahedronGeometry args={[2, 1]} />
        <meshBasicMaterial 
          color="#FF00FF" 
          transparent 
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>
      
      {/* Outer wireframe layer 1 */}
      <mesh ref={outerGlowRef} scale={2.2}>
        <icosahedronGeometry args={[2, 0]} />
        <meshBasicMaterial 
          color="#8B00FF" 
          transparent 
          opacity={0.08}
          wireframe
        />
      </mesh>
      
      {/* Outer wireframe layer 2 */}
      <mesh scale={2.5}>
        <icosahedronGeometry args={[2, 0]} />
        <meshBasicMaterial 
          color="#00FFFF" 
          transparent 
          opacity={0.04}
          wireframe
        />
      </mesh>
      
      {/* Point lights for glow effect - more intense */}
      <pointLight color="#00FFFF" intensity={1} distance={15} />
      <pointLight color="#FF00FF" intensity={0.6} distance={12} position={[3, 3, 0]} />
      <pointLight color="#8B00FF" intensity={0.6} distance={12} position={[-3, -3, 0]} />
      <pointLight color="#FFFFFF" intensity={0.3} distance={8} position={[0, 0, 3]} />
    </group>
  );
}
