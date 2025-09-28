import { Swiper, SwiperSlide } from "swiper/react";

import "../swiper1.css";
import { useState, useEffect } from "react";
import { projectsInfo, projectsShowcase } from "../constants";
import styles from "../style";
import { Autoplay, Navigation, EffectCube } from "swiper/modules";

const Showcase = () => {
  const [showHeading, setShowHeading] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);
  const [showShowcase, setShowShowcase] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowHeading(true), 200); // slight delay for effect
    setTimeout(() => setShowStatistics(true), 700); // show statistics after 4s
    setTimeout(() => setShowShowcase(true), 2000); // show showcase after 6s
  }, []);

  // Only show 3 images: left, center, right

  return (
    <section
      className={`flex-shrink-0 relative w-screen h-screen ${styles.sectionPadding} flex flex-col ${styles.paddingX} bg-gray-300 gap-1 snap-start`}
      id="showcase"
    >
      <div className={`${styles.textCenter} basis-3 flex flex-col gap-0`}>
        <h2
          className={`
            text-4xl uppercase transition-all duration-700 text-gray-800 ${
              showHeading
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }
            
          `}
        >
          Projects
        </h2>
        {/* Mirror reflection */}
        <h2
          className={`
            text-4xl uppercase mt-0 pointer-events-none select-none transition-all duration-700 text-gray-800 ${
              showHeading
                ? "opacity-40 translate-x-0"
                : "opacity-0 -translate-x-8"
            }
          
          `}
          style={{
            transform: "scaleY(-1)",
            maskImage: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
          }}
        >
          Projects
        </h2>
      </div>
      <div
        className={`flex flex-row justify-between w-full h-fit transition-all duration-700 ${
          showStatistics ? "opacity-100" : "opacity-0"
        }`}
      >
        {projectsInfo.map((project) => (
          <div className="flex flex-col h-fit gap-1 md:gap-2 text-center lg:text-start">
            <span className="text-4xl md:text-6xl text-gray-900">
              {project.number}
            </span>
            <p className="uppercase text-lg md:text-2xl font-light text-gray-900">
              {project.label}
            </p>
          </div>
        ))}
      </div>
      <h2
        className={`text-4xl uppercase ${
          styles.textCenter
        } text-gray-900 transition-all duration-700 mt-1 sm:mt-2 lg:mt-4 ${
          showShowcase
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-8"
        }`}
      >
        Showcase
      </h2>
      <div className="absolute left-0 bottom-0 w-full h-[20vh] bg-gray-50/60 backdrop-blur-sm"></div>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        lazyPreloadPrevNext={1}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, EffectCube]}
        className="w-[80%] md:w-[50%] max-w-7xl "
      >
        {projectsShowcase.map((project) => (
          <SwiperSlide
            key={project.title}
            className="flex h-[100px] w-full flex-col justify-between"
          >
            <div className="flex flex-col gap-4 text-gray-800 items-center justify-center text-center my-4 px-0 lg:px-4">
              <video
                src={project.video}
                poster={project.image}
                autoPlay
                loop
                aria-label={project.aria}
                className="w-full rounded-sm shadow-lg"
              ></video>
            </div>

            <div className={`w-full ${styles.mirrorSwiper}`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover  rounded-sm mirrorEffect"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Showcase;
