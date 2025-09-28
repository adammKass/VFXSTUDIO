import type { Meta, StoryObj } from "@storybook/react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import Prism from "../components/3d/Prism"; // your Prism component

// --- Mouse tracking hook ---
function useMouseParallax(intensity = 0.5) {
  const { size } = useThree();
  const [offset, setOffset] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / size.width - 0.5) * intensity;
      const y = (e.clientY / size.height - 0.5) * intensity;
      setOffset([x, y]);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size, intensity]);

  return offset;
}

// --- Scene with multiple prisms ---
function PrismScene({
  ior,
  opacity,
  thickness,
}: {
  ior: number;
  opacity: number;
  thickness: number;
}) {
  const group = useRef<THREE.Group>(null!);
  const [x, y] = useMouseParallax(2); // small offset

  useFrame(() => {
    if (group.current) {
      group.current.position.x = x;
      group.current.position.y = -y;
    }
  });

  return (
    <group ref={group}>
      {/* Large center prism */}
      <Prism scale={[2, 2, 2]} position={[0, 0, 0]}>
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={opacity}
          roughness={0}
          metalness={0}
          transmission={1}
          ior={ior}
          thickness={thickness}
          clearcoat={1}
        />
      </Prism>

      {/* Smaller prisms around it */}
      <Prism scale={[1, 1, 1]} position={[-3, -1, -1]}>
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={opacity}
          roughness={0}
          metalness={0}
          transmission={1}
          ior={ior}
          thickness={thickness}
          clearcoat={1}
        />
      </Prism>
      <Prism scale={[1, 1, 1]} position={[3, 1, -2]}>
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={opacity}
          roughness={0}
          metalness={0}
          transmission={1}
          ior={ior}
          thickness={thickness}
          clearcoat={1}
        />
      </Prism>
      <Prism scale={[0.7, 0.7, 0.7]} position={[1, -2, 1]}>
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={opacity}
          roughness={0}
          metalness={0}
          transmission={1}
          ior={ior}
          thickness={thickness}
          clearcoat={1}
        />
      </Prism>
    </group>
  );
}

// --- Storybook meta ---
const meta: Meta<typeof PrismScene> = {
  title: "3D/Prism",
  component: PrismScene,
  argTypes: {
    ior: { control: { type: "range", min: 1, max: 2.5, step: 0.01 } },
    opacity: { control: { type: "range", min: 0, max: 1, step: 0.01 } },
    thickness: { control: { type: "range", min: 0.1, max: 5, step: 0.1 } },
  },
};
export default meta;

type Story = StoryObj<typeof PrismScene>;

// --- Default story ---
export const Default: Story = {
  args: {
    ior: 1.5,
    opacity: 1,
    thickness: 4.4,
  },
  render: (args) => (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} color="#adf542" />
        <pointLight position={[10, 10, 10]} color="#adf542" />
        <PrismScene {...args} />
        <Environment preset="studio" />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  ),
};
