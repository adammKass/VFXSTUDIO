import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function DriftingLight() {
  const lightRef = useRef<THREE.PointLight>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (lightRef.current) {
      // Smooth drifting movement using multiple sine waves
      lightRef.current.position.x =
        Math.sin(t * 0.3) * 8 + Math.sin(t * 0.7) * 2;
      lightRef.current.position.y =
        4 + Math.sin(t * 0.2) * 2 + Math.cos(t * 0.5) * 1;
      lightRef.current.position.z =
        Math.cos(t * 0.25) * 6 + Math.sin(t * 0.4) * 3;
    }
  });

  return (
    <pointLight
      ref={lightRef}
      intensity={120}
      distance={40}
      decay={2}
      color={"#ffffff"}
    />
  );
}

export default DriftingLight;
