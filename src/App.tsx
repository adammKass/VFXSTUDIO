import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/utils/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Process from "./components/Process";
import About from "./components/About";
import Contact from "./components/Contact";
import Section from "./components/utils/Section";

function App() {
  return (
    <>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory overflow-hidden">
        <Hero />

        <Services />

        <Showcase />

        <Process />

        <About />

        <Contact />
      </div>
    </>
  );
}

export default App;
