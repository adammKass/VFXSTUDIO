import { motion } from "framer-motion";
import { accolades } from "../constants";
import styles from "../style";
import { containerVariants, fadeInVariants } from "./utils/animationsMotion";
import H2Section from "./decor/H2Section";

const About = () => {
  return (
    <section
      id="about"
      className={`relative w-screen min-h-screen flex flex-col ${styles.sectionPadding} ${styles.paddingX} bg-[url('/src/assets/jpgs/jpg_About.jpg')] bg-cover snap-start`}
    >
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-gray-50 to-gray-50/10 z-0" />

      {/* Heading */}
      <motion.div
        className="flex flex-col gap-0 text-gray-900 text-center lg:text-start"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <H2Section heading="About Us" />
      </motion.div>

      {/* Paragraph */}
      <motion.div
        className="flex flex-col gap-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          className={`w-full lg:w-1/2 ${styles.textCenter} mt-0 sm:mt-10 text-gray-800 text-sm md:text-base`}
          variants={fadeInVariants}
        >
          We are a cutting-edge VFX studio specializing in creating stunning
          visual effects for films, commercials, and video games. Our team of
          talented artists and technicians leverage the latest technology to
          bring imaginative concepts to life, delivering high-quality results
          that captivate audiences worldwide.
        </motion.p>

        {/* Reflection (desktop only) */}
        <motion.p
          className={`hidden sm:block w-full lg:w-1/2 mt-2 max-h-24 ${styles.textCenter} text-gray-800 text-sm md:text-base opacity-40 pointer-events-none select-none`}
          variants={fadeInVariants}
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
        </motion.p>
      </motion.div>

      {/* Accolades / Partners */}
      <motion.div
        className="flex flex-col items-center mt-4 sm:mt-0 lg:mt-[10vh] gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h3
          className="uppercase text-2xl text-gray-800"
          variants={fadeInVariants}
        >
          Our Partners
        </motion.h3>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12"
          variants={containerVariants}
        >
          {accolades.map((accolade) => (
            <motion.div
              key={accolade.label}
              className="flex justify-center items-center"
              variants={fadeInVariants}
            >
              <img
                src={accolade.image}
                alt={accolade.label}
                className="w-1/2 sm:w-3/4 lg:w-full object-contain h-auto"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
