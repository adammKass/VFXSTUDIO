import { Swiper, SwiperSlide } from "swiper/react";
import "../swiper1.css";
import "../swiperCube.css";
import "../swiperPagination.css";

import styles from "../style";
import { servicesShowcase } from "../constants";
import { Navigation, Autoplay, EffectCube } from "swiper/modules";
import { useMemo } from "react";
import H2Section from "./decor/H2Section";
import { motion } from "framer-motion";
import useIsMobile from "./utils/useMobile";
import { fadeInVariants } from "./utils/animationsMotion";

// import SwiperSlide from "swiper/react"; // Already imported above

const Services = () => {
  const isMobile = useIsMobile(768); // <768px = mobile

  const swiperEffect = isMobile ? "slide" : "cube";

  const slides = useMemo(
    () =>
      servicesShowcase.map((service) => (
        <SwiperSlide
          key={service.title}
          className="w-full flex-col justify-between"
        >
          <div className="flex flex-col gap-4 text-gray-800 items-center justify-center text-center px-0 lg:px-4">
            <h3 className="uppercase text-2xl">{service.title}</h3>
            <p>{service.text}</p>
            <video
              src={service.video}
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
                src={service.video}
                poster={service.image}
                aria-label={service.aria}
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
  return (
    <section
      className={`flex-shrink-0 relative w-screen h-screen ${styles.sectionPadding} flex flex-col ${styles.paddingX} snap-start bg-gradient-to-t from-gray-400/80 via-white/50 to-gray-200/80  bg-[0,0,0,0.3]`}
      id="services"
    >
      <div className="absolute left-0 bottom-0 w-full h-[20vh] bg-gray-50/60 backdrop-blur-sm"></div>
      <motion.div
        className="flex flex-col gap-0 text-gray-900 text-center lg:text-start"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <H2Section heading="Services" />
      </motion.div>
      <motion.div
        className={`flex items-center justify-start w-full h-full transition-all duration-700 mt-0 xl:mt-20`}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 2, ease: "easeOut" },
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Swiper
          effect={swiperEffect}
          grabCursor={true}
          loop={true}
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
          className="w-[80%] md:w-[55%] max-w-7xl"
        >
          {slides}
        </Swiper>
      </motion.div>
    </section>
  );
};
export default Services;
