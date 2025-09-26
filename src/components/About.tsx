import { useEffect, useState } from "react";
import { accolades } from "../constants";
import styles from "../style";

const About = () => {
  const [showHeading, setShowHeading] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showAccolades, setShowAccolades] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowHeading(true), 200); // slight delay for effect
    setTimeout(() => setShowParagraph(true), 2200); // show paragraph after 4s
    setTimeout(() => setShowAccolades(true), 2000); // show accolades after 6s
  }, []);

  return (
    <section
      className={`relative w-screen h-screen flex flex-col ${styles.sectionPadding} ${styles.paddingX}  bg-[url('/src/assets/jpgs/jpg_About.jpg')] bg-cover snap-start`}
      id="about"
    >
      <div className="pointer-events-none absolute left-0 bottom-0 w-full h-full  bg-gradient-to-t from-gray-50 to-gray-50/10 z-0" />
      <div className={`${styles.textCenter} flex flex-col gap-0 text-gray-800`}>
        <h2
          className={`
            text-4xl uppercase transition-all duration-700 ${
              showHeading
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }
            
          `}
        >
          About Us
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
          About Us
        </h2>
      </div>
      <div className="flex flex-col gap-0">
        <p
          className={`w-full lg:w-1/2 ${
            styles.textCenter
          } mt-0 sm:mt-10 text-lg transition-all duration-700 text-gray-800 text-sm md:text-base ${
            showHeading
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-8"
          }`}
        >
          We are a cutting-edge VFX studio specializing in creating stunning
          visual effects for films, commercials, and video games. Our team of
          talented artists and technicians leverage the latest technology to
          bring imaginative concepts to life, delivering high-quality results
          that captivate audiences worldwide.
        </p>
        <p
          className={`w-full ${
            styles.textCenter
          } lg:w-1/2 mt-2 max-h-24 hidden sm:block text-lg pointer-events-none select-none transition-all duration-700 text-gray-800 ${
            showHeading
              ? "opacity-40 translate-x-0"
              : "opacity-0 -translate-x-8"
          }`}
          style={{
            transform: "scaleY(-1)",
            maskImage: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
          }}
        >
          We are a cutting-edge VFX studio specializing in creating stunning
          visual effects for films, commercials, and video games. Our team of
          talented artists and technicians leverage the latest technology to
          bring imaginative concepts to life, delivering high-quality results
          that captivate audiences worldwide.
        </p>
      </div>

      <div
        className={`flex flex-col items-center mt-4 sm:mt-0 lg:mt-[10vh] gap-5 transition-all duration-700 ${
          showAccolades
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-8"
        }`}
      >
        <h3 className="uppercase text-2xl text-gray-800">Our Partners</h3>
        <div
          className={` grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12
        transition-all duration-700 ${
          showParagraph ? "opacity-100" : "opacity-0"
        }`}
        >
          {accolades.map((accolade) => (
            <div
              key={accolade.label}
              className="flex justify-center items-center"
            >
              <img
                src={accolade.image}
                alt={accolade.label}
                className="w-1/2 sm:w-3/4 lg:w-full object-contain h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;
