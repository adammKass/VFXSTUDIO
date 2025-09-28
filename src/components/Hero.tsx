import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Tab,
  TabGroup,
  TabList,
} from "@headlessui/react";
import { svg_Close, svg_Logo_Black, svg_Menu } from "../assets";
import { navLinks } from "../constants";
import styles from "../style";
import { useEffect, useState, forwardRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Mesh } from "three";
import GlassShard from "./3d/GlassShard";
import GlassWall from "./3d/GlassWall";
import DriftingLight from "./3d/DriftingLight";

// FloatingShard props
interface FloatingShardProps {
  position: [number, number, number];
  index: number;
  rotation: [number, number, number];
  scale: [number, number, number];
}

interface ShardRef extends Mesh {}

const FloatingShard = forwardRef<ShardRef, FloatingShardProps>(
  ({ position, rotation, scale }, ref) => {
    // Each shard just slowly animates (no hover or click)
    useFrame(() => {
      if (ref && typeof ref !== "function" && ref.current) {
        ref.current.rotation.y += 0.001;
      }
    });

    return (
      <GlassShard
        ref={ref}
        position={position}
        rotation={rotation}
        scale={scale}
        renderOrder={1}
      />
    );
  }
);

FloatingShard.displayName = "FloatingShard";

const Hero = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [lightButton, setLightButton] = useState(false);

  useEffect(() => {
    setShowMenu(false);
    setTimeout(() => setShowHeading(true), 200);
    setTimeout(() => setShowParagraph(true), 800);
    setTimeout(() => setShowButton(true), 1200);
    setTimeout(() => setLightButton(true), 1800);
  }, []);

  // Bigger, denser shard wall
  const shardCount = 220;

  return (
    <main
      className={`relative w-screen h-screen flex flex-col bg-gradient-to-t from-gray-400/80 via-gray-300/50 to-gray-500/80 snap-start hero-bg`}
      id="home"
    >
      <div
        style={{ width: "100%", height: "100%" }}
        className={`absolute top-0`}
      >
        <Canvas camera={{ position: [0, 2, 10], fov: 55 }}>
          <ambientLight intensity={0.1} />
          <pointLight position={[5, 10, -5]} intensity={200} />
          <DriftingLight /> {/* 🌌 smooth drifting light */}
          {/* <pointLight position={[-10, 10, -10]} intensity={0.5} /> */}
          {/* Dense Glass Wall */}
          {/* {shardPositions.map((pos, index) => (
            <FloatingShard
              key={index}
              position={pos}
              index={index}
              rotation={shardRotations[index]}
              scale={shardScales[index]}
            />
          ))} */}
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

      <header
        className={`flex flex-row justify-between items-center w-full py-4 bg-gray-50/80 ${styles.paddingX} backdrop-blur-xl`}
      >
        <a href="#home">
          <img
            src={svg_Logo_Black}
            alt="logo"
            className="h-6 lg:h-10 transition-opacity duration-300 hover:opacity-40 cursor-pointer"
          />
        </a>
        <TabGroup>
          <TabList className={`flex-row gap-8 hidden lg:flex`}>
            {navLinks.map((link) => (
              <Tab key={link.label}>
                <a
                  href={link.href}
                  className="text-2xl font-light text-gray-900 uppercase transition-all duration-300 hover:opacity-40 hover:transform hover:translate-y-2"
                >
                  {link.label}
                </a>
              </Tab>
            ))}
          </TabList>
        </TabGroup>
        <Menu>
          <MenuButton
            className="block lg:hidden cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            <img
              src={showMenu ? svg_Close : svg_Menu}
              alt="Menu"
              className="w-8 h-8"
            />
          </MenuButton>
          <MenuItems className="absolute text-2xl font-light uppercase left-0 w-full h-screen top-16 bg-gradient-to-t from-gray-400/80 via-gray-300/50 to-gray-200/80 backdrop-blur-xl p-4 flex flex-col items-center gap-4 shadow-lg">
            {navLinks.map((link) => (
              <MenuItem key={link.label}>
                <a href={link.href}>{link.label}</a>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </header>

      <div
        className={`flex flex-col ${styles.paddingX} h-full gap-12 justify-center hero-floating w-fit`}
      >
        <div className="flex flex-col items-center text-center lg:text-start lg:items-start gap-5 w-fit">
          <h1
            className={`font-heading text-4xl lg:text-7xl uppercase  transition-all duration-300 ${
              showHeading
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            Where Light <br /> Becomes Legend
          </h1>
          <p
            className={`pl-1 text-sm lg:text-base ${
              showParagraph
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            } transition-all duration-300`}
          >
            Crafting breathtaking worlds through visionary VFX, 3D artistry, and
            cinematic lighting.
          </p>
        </div>
        <button
          className={`uppercase backdrop-blur-xs p-4 w-full lg:w-1/3 text-black transition-all duration-300 rounded-sm inset-shadow-sm ring-2 ${
            showButton
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-8"
          } ${
            lightButton
              ? "bg-gray-50/80 shadow-xl shadow-gray-50"
              : "bg-gray-50/0 shadow-none"
          } hover:scale-105 hover:bg-white hover:cursor-pointer`}
        >
          Let’s Build Together
        </button>
      </div>
    </main>
  );
};

export default Hero;
