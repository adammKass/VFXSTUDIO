import { Canvas } from "@react-three/fiber";
import DriftingLight from "../3d/DriftingLight";
import GlassWall from "../3d/GlassWall";
import { Environment, OrbitControls } from "@react-three/drei";

const HeroCanvas = () => {
  return (
    <div style={{ width: "100%", height: "100%" }} className={`absolute top-0`}>
      <Canvas camera={{ position: [0, 2, 10], fov: 55 }}>
        <DriftingLight /> {/* 🌌 smooth drifting light */}
        <GlassWall position={[0, 0, 8]} rotation={[0, 0, 0]} />
        <Environment preset="studio" />
        <OrbitControls
          enablePan={false}
          enableZoom={false} // ❌ disable zoom
          minPolarAngle={Math.PI / 2} // lock to horizontal rotation
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};
export default HeroCanvas;
