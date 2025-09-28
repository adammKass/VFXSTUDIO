import * as THREE from "three";
import { useRef, type JSX, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

function GlassShard(props: JSX.IntrinsicElements["mesh"]) {
  const mesh = useRef<THREE.Mesh>(null!);

  // Subtle floating / rotation animation
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.002;
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  // Generate random irregular shard shape
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    const points: [number, number][] = [];

    const numPoints = 4 + Math.floor(Math.random() * 3); // 4–6 points
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      const radius = 0.5 + Math.random() * 0.8; // random radius for jaggedness
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      points.push([x, y]);
    }

    s.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
      s.lineTo(points[i][0], points[i][1]);
    }
    s.lineTo(points[0][0], points[0][1]);

    return s;
  }, []);

  const extrudeSettings = {
    depth: 0.3 + Math.random() * 0.3,
    bevelEnabled: true,
    bevelThickness: 0.02, // very subtle bevel depth
    bevelSize: 0.02, // slight rounding
    bevelSegments: 2, // smooth bevel curve
  };

  return (
    <mesh ref={mesh} {...props}>
      <extrudeGeometry args={[shape, extrudeSettings]} />
      <meshPhysicalMaterial
        color="#999999"
        transparent
        opacity={0.8}
        roughness={0.05}
        metalness={0}
        transmission={0.6} // allow a bit more light through
        ior={1.52}
        thickness={0.3 + Math.random() * 0.5}
        clearcoat={1}
        clearcoatRoughness={0.05}
        reflectivity={1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default GlassShard;
