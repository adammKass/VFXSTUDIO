import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface GlassWallProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export default function GlassWall({ position, rotation }: GlassWallProps) {
  const { scene } = useGLTF("glass3dd.glb");

  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      (child as THREE.Mesh).material = new THREE.MeshPhysicalMaterial({
        color: "#999999",
        transparent: true,
        opacity: 0.8,
        roughness: 0.05,
        metalness: 0,
        transmission: 0.2,
        ior: 1.52,
        thickness: 0.5,
        clearcoat: 1,
        clearcoatRoughness: 0.05,
        reflectivity: 1,
        side: THREE.DoubleSide,
      });
    }
  });

  return <primitive object={scene} position={position} rotation={rotation} />;
}

// Preload for performance
useGLTF.preload("glass3dd.glb");
