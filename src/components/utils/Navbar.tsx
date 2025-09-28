import { Tab, TabGroup, TabList } from "@headlessui/react";

import { navLinks } from "../../constants";
import { svg_Logo } from "../../assets";
import styles from "../../style";

const Navbar = () => {
  return (
    <header
      className={`flex justify-between items-center w-full ${styles.paddingX} absolute top-0 left-0 py-4 bg-opacity-50 backdrop-blur-xl snap-start`}
    >
      <img src={svg_Logo} alt="logo" />
      <TabGroup>
        <TabList className={`flex flex-row gap-8`}>
          {navLinks.map((link) => (
            <Tab key={link.label}>
              <a href={link.href} className="text-2xl font-light uppercase">
                {link.label}
              </a>
            </Tab>
          ))}
        </TabList>
      </TabGroup>
    </header>
  );
};

export default Navbar;
