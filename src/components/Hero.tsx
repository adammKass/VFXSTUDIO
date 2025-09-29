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
import { lazy, Suspense, useEffect, useState } from "react";
// import HeroCanvas from "./decor/HeroCanvas";
import { motion, type Variants } from "framer-motion";
import HeroCanvas from "./decor/HeroCanvas";
import { containerVariants, fadeInVariants } from "./utils/animationsMotion";

const Hero = () => {
  const [showMenu, setShowMenu] = useState(false);
  // const HeroCanvas = lazy(() => import("./decor/HeroCanvas"));
  return (
    <main
      className={`relative w-screen h-screen flex flex-col bg-gradient-to-t from-gray-400/80 via-gray-300/50 to-gray-500/80 snap-start hero-bg`}
      id="home"
    >
      {/* <Suspense
        fallback={
          <div className="w-full h-full absolute top-0 left-0 bg-gray-900" />
        }
      > */}
      <HeroCanvas />
      {/* </Suspense> */}

      <header
        className={`flex flex-row justify-between items-center w-full py-4 bg-gray-50/80 ${styles.paddingX} backdrop-blur-xl`}
      >
        <a href="#home">
          <img
            src={svg_Logo_Black}
            alt="Company Logo"
            className="h-6 lg:h-10 transition-opacity duration-300 hover:opacity-40 cursor-pointer"
            loading="eager"
            decoding="async"
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

      <motion.div
        className={`flex flex-col ${styles.paddingX} h-full gap-12 justify-center hero-floating w-fit`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // triggers only once when 30% visible
      >
        <motion.div
          className="flex flex-col items-center text-center lg:text-start lg:items-start gap-5 w-fit"
          variants={containerVariants}
        >
          <motion.h1
            className="font-heading text-4xl lg:text-7xl uppercase"
            variants={fadeInVariants}
          >
            Where Light <br /> Becomes Legend
          </motion.h1>
          <motion.p
            className="pl-1 text-sm lg:text-base"
            variants={fadeInVariants}
          >
            Crafting breathtaking worlds through visionary VFX, 3D artistry, and
            cinematic lighting.
          </motion.p>
        </motion.div>

        <motion.button
          className="uppercase backdrop-blur-xs p-4 w-full lg:w-1/3 text-black rounded-sm inset-shadow-sm ring-2 bg-gray-50/80 shadow-xl shadow-gray-50 hover:scale-105 hover:bg-white hover:cursor-pointer transition-all duration-300"
          variants={fadeInVariants}
          type="button"
        >
          Let’s Build Together
        </motion.button>
      </motion.div>
    </main>
  );
};

export default Hero;
