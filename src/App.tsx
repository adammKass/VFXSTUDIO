import "./App.css";

import Hero from "./components/Hero";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Process from "./components/Process";
import About from "./components/About";
import Contact from "./components/Contact";

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
