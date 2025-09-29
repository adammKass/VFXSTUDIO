import { motion, type Variants } from "framer-motion";
import { timelineInfo } from "../constants";
import styles from "../style";
import H2Section from "./decor/H2Section";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.6, // delay between steps
    },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Process = () => {
  return (
    <section
      id="process"
      className={`flex-shrink-0 relative w-screen min-h-screen ${styles.sectionPadding} flex flex-col ${styles.paddingX} ${styles.boxWidth} gap-12 md:gap-32 text-gray-900 snap-start bg-gradient-to-t from-gray-400/80 via-white/50 to-gray-200/80 backdrop-blur-sm border border-white/20 rounded-xl shadow`}
    >
      <H2Section heading="Our Process" />

      <motion.div
        className="w-full flex flex-col md:flex-row justify-start md:justify-between items-start gap-8 md:gap-10 relative z-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {timelineInfo.map((step) => (
          <motion.div
            key={step.label}
            variants={stepVariants}
            className="flex flex-col items-center gap-6 md:gap-[15vh] flex-1 z-10"
          >
            {/* Animated square */}
            <motion.div
              className="w-6 h-6 md:w-14 md:h-14 rotate-45 relative flex items-center justify-center"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {/* Glassy background */}
              <div className="absolute inset-0 rounded-[6px] bg-gradient-to-br from-white/60 via-white/10 to-blue-100/30 backdrop-blur-md border border-white/40 shadow-lg" />
              {/* Edge highlight */}
              <div className="absolute inset-0 rounded-[6px] border-2 border-white/60 opacity-30" />
              {/* Subtle reflection */}
              <div className="absolute left-2 top-2 w-2/3 h-2/5 rounded-full bg-white/40 opacity-40 blur-sm" />
              {/* Optional faint cube lines (desktop only) */}
              <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-white/20 -translate-x-1/2" />
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2" />
            </motion.div>

            {/* Step text */}
            <div className="flex flex-col items-center justify-start md:justify-between gap-4 h-fit md:h-64 w-full">
              <h3 className="uppercase text-lg md:text-2xl text-gray-900 text-center transition-all duration-700">
                {step.label}
              </h3>
              <p className="text-center text-sm md:text-base text-gray-700">
                {step.text}
              </p>

              {/* Reflection (desktop only) */}
              <p
                className="hidden md:flex text-center mt-2 md:mt-[20vh] pointer-events-none select-none text-gray-800"
                style={{
                  transform: "scaleY(-1)",
                  maskImage:
                    "linear-gradient(to top, rgba(1,1,1,0.6), transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to top, rgba(1,1,1,0.6), transparent)",
                }}
              >
                {step.text}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Process;
