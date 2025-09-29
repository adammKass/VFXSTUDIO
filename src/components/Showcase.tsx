import { Swiper, SwiperSlide } from "swiper/react";

import "../swiper1.css";
import { useState, useEffect, useMemo } from "react";
import { projectsInfo, projectsShowcase } from "../constants";
import styles from "../style";
import { Autoplay, Navigation, EffectCube } from "swiper/modules";
import H2Section from "./decor/H2Section";
import { motion } from "framer-motion";
import { containerVariants, fadeInVariants } from "./utils/animationsMotion";
import useIsMobile from "./utils/useMobile";

const Showcase = () => {
  const isMobile = useIsMobile(768); // <768px = mobile

  const swiperEffect = isMobile ? "slide" : "cube";

  const slides = useMemo(
    () =>
      projectsShowcase.map((project) => (
        <SwiperSlide
          key={project.title}
          className="w-full flex-col justify-between"
        >
          <div className="flex flex-col gap-4 text-gray-800 items-center justify-center text-center px-0 lg:px-4">
            <video
              src={project.video}
              autoPlay={!isMobile}
              loop={!isMobile}
              muted
              playsInline
              controls={isMobile}
              preload="metadata"
              className="w-full rounded-sm shadow-lg"
            />
          </div>
          {!isMobile && (
            <div className={`w-full ${styles.mirrorSwiper}`}>
              <video
                src={project.video}
                poster={project.image}
                aria-label={project.aria}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-sm mirrorEffect"
              />
            </div>
          )}
        </SwiperSlide>
      )),
    []
  );
  // Only show 3 images: left, center, right

  return (
    <section
      className={`flex-shrink-0 relative w-screen h-screen ${styles.sectionPadding} flex flex-col ${styles.paddingX} bg-gray-300 gap-1 snap-start`}
      id="showcase"
    >
      <motion.div
        className="flex flex-col gap-0 text-gray-900 text-center lg:text-start"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <H2Section heading="Projects" />
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={`flex flex-row justify-between w-full h-fit transition-all duration-700`}
      >
        {projectsInfo.map((project) => (
          <motion.div className="flex flex-col h-fit gap-1 md:gap-2 text-center lg:text-start">
            <motion.span
              variants={fadeInVariants}
              className="text-4xl md:text-6xl text-gray-900"
            >
              {project.number}
            </motion.span>
            <motion.p
              variants={fadeInVariants}
              className="uppercase text-lg md:text-2xl font-light text-gray-900"
            >
              {project.label}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
      <motion.h2
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={`text-4xl uppercase ${styles.textCenter} text-gray-900 transition-all duration-700 mt-1 sm:mt-2 lg:mt-4`}
      >
        Showcase
      </motion.h2>
      <div className="absolute left-0 bottom-0 w-full h-[20vh] bg-gray-50/60 backdrop-blur-sm"></div>
      <Swiper
        effect={swiperEffect}
        grabCursor={true}
        lazyPreloadPrevNext={1}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: isMobile ? 3500 : 5500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Navigation, EffectCube]}
        className="w-[80%] md:w-[50%] max-w-7xl "
      >
        {slides}
      </Swiper>
    </section>
  );
};
export default Showcase;
