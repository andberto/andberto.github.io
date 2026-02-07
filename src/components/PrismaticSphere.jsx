import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* -------------------------------------------------------
   Geometry helpers – extract edges & vertices from an
   IcosahedronGeometry so we can render thick beams.
   ------------------------------------------------------- */

function extractStructure(radius, detail) {
  const geo = new THREE.IcosahedronGeometry(radius, detail);
  const pos = geo.attributes.position;

  const vertMap = new Map();
  const indexToKey = new Map();

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const key = `${x.toFixed(4)}_${y.toFixed(4)}_${z.toFixed(4)}`;
    if (!vertMap.has(key)) {
      vertMap.set(key, new THREE.Vector3(x, y, z));
    }
    indexToKey.set(i, key);
  }

  const edgeSet = new Set();
  const edges = [];
  const triCount = geo.index ? geo.index.count : pos.count;
  const getIdx = geo.index ? (i) => geo.index.getX(i) : (i) => i;

  for (let i = 0; i < triCount; i += 3) {
    const keys = [getIdx(i), getIdx(i + 1), getIdx(i + 2)].map((j) => indexToKey.get(j));
    for (const [k1, k2] of [
      [keys[0], keys[1]],
      [keys[1], keys[2]],
      [keys[2], keys[0]],
    ]) {
      const ek = k1 < k2 ? `${k1}|${k2}` : `${k2}|${k1}`;
      if (!edgeSet.has(ek)) {
        edgeSet.add(ek);
        edges.push({ start: vertMap.get(k1), end: vertMap.get(k2) });
      }
    }
  }

  geo.dispose();
  return { edges, vertices: Array.from(vertMap.values()) };
}

/**
 * Compute beam transforms, shrinking each beam so it stops
 * at the surface of the vertex node (no overlap).
 */
function computeEdgeTransforms(edges, shrinkPerEnd) {
  return edges.map(({ start, end }) => {
    const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    const dir = new THREE.Vector3().subVectors(end, start);
    const fullLength = dir.length();
    const length = Math.max(fullLength - 2 * shrinkPerEnd, 0.01);
    dir.normalize();
    const quaternion = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir,
    );
    return { position: [mid.x, mid.y, mid.z], quaternion, length };
  });
}

/* -------------------------------------------------------
   Main sphere component
   ------------------------------------------------------- */

const NODE_SIZE = 0.09;        // vertex sphere radius (smaller nodes)
const BEAM_THICKNESS = 0.11;   // parallelepiped cross-section

export default function PrismaticSphere({ rotation }) {
  const groupRef = useRef();
  const edgeMeshRefs = useRef([]);
  const vertexMeshRefs = useRef([]);

  const { edgeTransforms, vertices } = useMemo(() => {
    const { edges, vertices } = extractStructure(2, 0);
    // Shrink beams by node radius on each end so they meet flush with vertex spheres
    const edgeTransforms = computeEdgeTransforms(edges, NODE_SIZE * 0.7);
    return { edgeTransforms, vertices };
  }, []);

  const colors = useMemo(
    () => ({
      cyan: new THREE.Color('#00FFFF'),
      magenta: new THREE.Color('#FF00FF'),
    }),
    [],
  );

  /* ---------- animation loop ---------- */
  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        rotation,
        0.03,
      );
      groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
      groupRef.current.rotation.z = Math.cos(t * 0.2) * 0.05;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.15;
    }

    // Edge colour pulse (cyan ↔ magenta)
    edgeMeshRefs.current.forEach((mesh, i) => {
      if (!mesh?.material) return;
      const mix = Math.sin(t * 1.2 + i * 0.21) * 0.5 + 0.5;
      mesh.material.color.lerpColors(colors.cyan, colors.magenta, mix);
      mesh.material.emissive.lerpColors(colors.cyan, colors.magenta, mix);
      mesh.material.emissiveIntensity = 0.5 + Math.sin(t * 2 + i * 0.3) * 0.3;
    });

    // Vertex node pulse
    vertexMeshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const s = 1 + Math.sin(t * 3 + i * 0.5) * 0.15;
      mesh.scale.setScalar(NODE_SIZE * s);
      if (mesh.material) {
        const mix = Math.sin(t * 1.5 + i * 0.4) * 0.5 + 0.5;
        mesh.material.emissiveIntensity = 0.8 + mix * 0.5;
      }
    });
  });

  return (
    <group ref={groupRef} scale={0.78}>
      {/* ========== LIQUID BLOB CORE – primary layer ========== */}
      <mesh scale={0.62}>
        <sphereGeometry args={[2, 64, 64]} />
        <MeshDistortMaterial
          color="#00FFFF"
          emissive="#00AACC"
          emissiveIntensity={1.0}
          distort={0.5}
          speed={2.5}
          transparent
          opacity={0.6}
          roughness={0.05}
          metalness={0.9}
        />
      </mesh>

      {/* Inner magenta blob layer */}
      <mesh scale={0.48}>
        <sphereGeometry args={[2, 48, 48]} />
        <MeshDistortMaterial
          color="#FF00FF"
          emissive="#880088"
          emissiveIntensity={0.8}
          distort={0.38}
          speed={1.8}
          transparent
          opacity={0.4}
          roughness={0.15}
          metalness={0.7}
        />
      </mesh>

      {/* Hot white core for brightness */}
      <mesh scale={0.3}>
        <sphereGeometry args={[2, 32, 32]} />
        <MeshDistortMaterial
          color="#FFFFFF"
          emissive="#AAFFFF"
          emissiveIntensity={1.2}
          distort={0.3}
          speed={3.0}
          transparent
          opacity={0.35}
          roughness={0}
          metalness={1}
        />
      </mesh>

      {/* ========== THICK PARALLELEPIPED EDGES ========== */}
      {edgeTransforms.map((edge, i) => (
        <mesh
          key={`e-${i}`}
          ref={(el) => { edgeMeshRefs.current[i] = el; }}
          position={edge.position}
          quaternion={edge.quaternion}
        >
          <boxGeometry args={[BEAM_THICKNESS, edge.length, BEAM_THICKNESS]} />
          <meshStandardMaterial
            color="#00FFFF"
            emissive="#00FFFF"
            emissiveIntensity={0.6}
            transparent
            opacity={0.9}
            metalness={0.5}
            roughness={0.15}
          />
        </mesh>
      ))}

      {/* ========== VERTEX NODES (slightly larger, rounded look) ========== */}
      {vertices.map((v, i) => (
        <mesh
          key={`v-${i}`}
          ref={(el) => { vertexMeshRefs.current[i] = el; }}
          position={[v.x, v.y, v.z]}
          scale={NODE_SIZE}
        >
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial
            color="#FF00FF"
            emissive="#FF00FF"
            emissiveIntensity={0.8}
            transparent
            opacity={0.95}
            metalness={0.6}
            roughness={0.1}
          />
        </mesh>
      ))}

      {/* ========== TRANSPARENT FACE PANELS (Voronoi look) ========== */}
      <mesh>
        <icosahedronGeometry args={[2, 0]} />
        <meshPhysicalMaterial
          color="#0a0a2e"
          transparent
          opacity={0.08}
          side={THREE.DoubleSide}
          roughness={0.5}
          metalness={0.3}
          clearcoat={1}
          clearcoatRoughness={0.4}
        />
      </mesh>

      {/* ========== GLOW LAYERS ========== */}
      {/* Inner glow */}
      <mesh scale={1.08}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial
          color="#00FFFF"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Outer glow */}
      <mesh scale={1.25}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial
          color="#8B00FF"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Far outer halo */}
      <mesh scale={1.6}>
        <sphereGeometry args={[2, 16, 16]} />
        <meshBasicMaterial
          color="#00FFFF"
          transparent
          opacity={0.02}
          side={THREE.BackSide}
        />
      </mesh>

      {/* ========== LIGHTS (brighter) ========== */}
      <pointLight color="#00FFFF" intensity={2.0} distance={20} />
      <pointLight color="#FF00FF" intensity={1.0} distance={15} position={[3, 3, 0]} />
      <pointLight color="#8B00FF" intensity={0.8} distance={15} position={[-3, -3, 0]} />
      <pointLight color="#FFFFFF" intensity={0.8} distance={12} position={[0, 0, 4]} />
      <pointLight color="#00CED1" intensity={0.6} distance={10} position={[0, -3, 2]} />
    </group>
  );
}
