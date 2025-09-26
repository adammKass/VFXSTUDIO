import * as THREE from "three";
import { useRef, type JSX } from "react";
import { useFrame } from "@react-three/fiber";

function Prism(props: JSX.IntrinsicElements["mesh"]) {
  const mesh = useRef<THREE.Mesh>(null!);

  // Optional: rotate slowly like the Box example
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.003;
    }
  });

  // Build triangular shape
  const shape = new THREE.Shape();
  shape.moveTo(0, 1);
  shape.lineTo(-1, -1);
  shape.lineTo(1, -1);
  shape.lineTo(0, 1);

  const extrudeSettings = { depth: 1, bevelEnabled: false };

  return (
    <mesh ref={mesh} {...props}>
      <extrudeGeometry args={[shape, extrudeSettings]} />
      <meshPhysicalMaterial
        color="#ffffff"
        opacity={0.8}
        roughness={0}
        metalness={0}
        transmission={1} // glass-like refraction
        ior={1.5} // index of refraction
        thickness={0.5}
        clearcoat={1}
      />
    </mesh>
  );
}

export default Prism;
