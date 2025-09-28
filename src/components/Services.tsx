import { Swiper, SwiperSlide } from "swiper/react";
import "../swiper1.css";
import "../swiperCube.css";
import "../swiperPagination.css";

import styles from "../style";
import { servicesShowcase } from "../constants";
import { Navigation, Autoplay, EffectCube } from "swiper/modules";
import { useEffect, useState } from "react";
import H2Section from "./decor/H2Section";

// import SwiperSlide from "swiper/react"; // Already imported above

const Services = () => {
  const [showHeading, setShowHeading] = useState(false);
  const [showServices, setShowServices] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowHeading(true), 200); // slight delay for effect
    setTimeout(() => setShowServices(true), 700); // show services after 4s // show projects after 8s
  }, []);
  return (
    <section
      className={`flex-shrink-0 relative w-screen h-screen ${styles.sectionPadding} flex flex-col ${styles.paddingX} snap-start bg-gradient-to-t from-gray-400/80 via-white/50 to-gray-200/80  bg-[0,0,0,0.3]`}
      id="services"
    >
      <div className="absolute left-0 bottom-0 w-full h-[20vh] bg-gray-50/60 backdrop-blur-sm"></div>
      <div className="flex flex-col gap-0 text-gray-900 text-center lg:text-start">
        <H2Section showHeading={showHeading} heading="Services" />
      </div>
      <div
        className={`flex items-center justify-start w-full h-full transition-all duration-700 mt-0 xl:mt-20 ${
          showServices ? "opacity-100" : "opacity-0"
        }`}
      >
        <Swiper
          effect={"cube"}
          grabCursor={true}
          loop={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, EffectCube]}
          className="w-[80%] md:w-[55%] max-w-7xl"
        >
          {servicesShowcase.map((service) => (
            <SwiperSlide
              key={service.title}
              className=" w-full flex-col justify-between"
            >
              <div className="flex flex-col gap-4 text-gray-800 items-center justify-center text-center px-0 lg:px-4">
                <h3 className="uppercase text-2xl">{service.title}</h3>
                <p>{service.text}</p>
                <video
                  src={service.video}
                  autoPlay
                  loop
                  className="w-full rounded-sm shadow-lg"
                />
              </div>

              <div className={`w-full ${styles.mirrorSwiper}`}>
                <video
                  src={service.video}
                  autoPlay
                  loop
                  className="w-full h-full object-cover rounded-sm mirrorEffect"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Services;
