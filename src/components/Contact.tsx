import { motion } from "framer-motion";
import { svg_Email_Black, svg_Logo_Black, svg_Phone_Black } from "../assets";
import { socials } from "../constants";
import styles from "../style";
import { containerVariants, fadeInVariants } from "./utils/animationsMotion";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative w-screen h-screen bg-gray-400 bg-[url('./assets/jpgs/jpg_heroBanner.png')] bg-cover snap-start"
    >
      {/* Hero Section */}
      <motion.section
        className={`flex flex-col justify-start pt-4 items-center gap-10 h-[35%] sm:h-[50%] sm:justify-center ${styles.paddingX}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.span
          className={`uppercase ${styles.textCenter} font-heading text-4xl lg:text-6xl`}
          variants={fadeInVariants}
        >
          Ready to Create Something Epic?
        </motion.span>

        <motion.button
          className="uppercase backdrop-blur-xs p-4 w-full sm:w-2/3 lg:w-1/3 text-black rounded-sm inset-shadow-sm ring-2 bg-gray-50/80 shadow-xl shadow-gray-50 transition-all duration-400 hover:scale-105 hover:bg-white hover:cursor-pointer"
          variants={fadeInVariants}
        >
          Let’s Build Together
        </motion.button>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className={`w-full flex flex-col backdrop-blur-sm justify-center items-center sm:items-start bg-gray-100/50 text-gray-800 ${styles.paddingX} h-[55%] sm:h-[45%] gap-4 sm:gap-16`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Logo */}
        <motion.a
          href="#home"
          className="transition-opacity duration-300 hover:opacity-80 py-4"
          variants={fadeInVariants}
        >
          <img src={svg_Logo_Black} alt="logo" className="w-48 sm:w-64 h-14" />
        </motion.a>

        {/* Info Blocks */}
        <motion.div
          className="flex flex-col lg:flex-row w-full gap-4"
          variants={containerVariants}
        >
          {/* Office + Billing */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-start justify-between w-full lg:w-1/3 gap-4 sm:gap-0">
            <motion.div
              className="flex flex-col w-1/2"
              variants={fadeInVariants}
            >
              <h4 className="text-2xl font-light uppercase mb-3">Office</h4>
              <p className="text-sm font-light">123 Main St,</p>
              <p className="text-sm font-light">Anytown, USA</p>
            </motion.div>
            <motion.div
              className="flex flex-col w-1/2"
              variants={fadeInVariants}
            >
              <h4 className="text-2xl font-light uppercase mb-3">
                Billing Data
              </h4>
              <p className="text-sm font-light">ID: 123456</p>
              <p className="text-sm font-light">VAT ID: US123456789</p>
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.div
            className="w-full lg:w-2/3 flex flex-col sm:flex-row justify-between lg:justify-center gap-4 lg:gap-20 items-center sm:items-start"
            variants={containerVariants}
          >
            <motion.div
              className="flex flex-row items-center gap-4"
              variants={fadeInVariants}
            >
              <img
                src={svg_Phone_Black}
                alt="Phone"
                className="w-7 sm:w-14 h-7 sm:h-14"
              />
              <a
                href="tel:1234567890"
                className="font-light text-lg sm:text-2xl transition-opacity duration-300 hover:opacity-80"
              >
                123 456-7890
              </a>
            </motion.div>

            <motion.div
              className="flex flex-row items-center gap-4"
              variants={fadeInVariants}
            >
              <img
                src={svg_Email_Black}
                alt="Email"
                className="w-7 sm:w-14 h-7 sm:h-14"
              />
              <a
                href="mailto:info@example.com"
                className="font-light text-lg sm:text-2xl transition-opacity duration-300 hover:opacity-80"
              >
                info@example.com
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Socials */}
        <motion.div
          className="flex flex-row justify-center gap-8 sm:gap-16 mt-4 sm:mt-0"
          variants={containerVariants}
        >
          {socials.map((social) => (
            <motion.div
              key={social.label}
              className="flex flex-col items-center"
              variants={fadeInVariants}
            >
              <a
                href={social.href}
                className="transition-opacity duration-300 hover:opacity-80"
              >
                <img
                  src={social.image}
                  alt={social.label}
                  className="w-8 h-8"
                />
              </a>
              {/* Reflection */}
              <img
                src={social.image}
                alt={social.label}
                className="w-8 h-8 mt-1 pointer-events-none select-none"
                style={{
                  transform: "scaleY(-1)",
                  maskImage:
                    "linear-gradient(to top, rgba(0,0,0,0.3), transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to top, rgba(0,0,0,0.3), transparent)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.footer>

      {/* Bottom Bar */}
      <motion.div
        className={`bg-gray-50/75 flex flex-col sm:flex-row justify-center sm:justify-between text-gray-800 ${styles.paddingX} h-[10%] sm:h-[5%] items-center font-light`}
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span>© Prism Haven 2025, All Rights Reserved</span>
        <span>Design and development by Adam Kaščák</span>
      </motion.div>
    </div>
  );
};

export default Contact;
