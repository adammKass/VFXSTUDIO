import { useEffect, useState } from "react";
import { timelineInfo } from "../constants";
import styles from "../style";
import H2Section from "./decor/H2Section";

const ANIMATION_INTERVAL = 2000; // ms

const Process = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [allActive, setAllActive] = useState(false);
  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowHeading(true), 200); // slight delay for effect
  }, []);

  useEffect(() => {
    if (activeIndex < timelineInfo.length - 1) {
      const timer = setTimeout(
        () => setActiveIndex(activeIndex + 1),
        ANIMATION_INTERVAL
      );
      return () => clearTimeout(timer);
    } else if (activeIndex === timelineInfo.length - 1) {
      // After the last one is active, wait and then activate all
      const timer = setTimeout(() => setAllActive(true), ANIMATION_INTERVAL);
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  return (
    <section
      className={`flex-shrink-0 relative w-screen h-screen ${styles.sectionPadding} flex flex-col ${styles.paddingX} ${styles.boxWidth} gap-4 md:gap-32 text-gray-900 snap-start bg-gradient-to-t from-gray-400/80 via-white/50 to-gray-200/80 backdrop-blur-sm border border-white/20 rounded-xl shadow`}
      id="process"
    >
      <H2Section showHeading={showHeading} heading="Our Process" />
      <div className="hidden md:block absolute left-0 bottom-0 w-full h-[20vh] bg-gray-50/60 backdrop-blur-sm"></div>
      <div className="w-full h-[60vh] flex flex-col md:flex-row justify-start md:justify-between items-start gap-5 md:gap-10 relative z-0">
        {timelineInfo.map((step, idx) => {
          type StateType = "inactive" | "active" | "done";
          let state: StateType = "inactive";
          if (allActive) {
            state = "active";
          } else if (idx === activeIndex) {
            state = "active";
          } else if (idx < activeIndex) {
            state = "done";
          }

          // Style variants
          const squareStyles: Record<StateType, string> = {
            inactive: "opacity-0 grayscale",
            active: "opacity-100 shadow-2xl scale-110",
            done: "opacity-40 grayscale",
          };
          const textStyles: Record<StateType, string> = {
            inactive: "opacity-0",
            active: "opacity-100",
            done: "opacity-40",
          };

          return (
            <div
              className="flex flex-col items-center gap-6 md:gap-[15vh] flex-1 z-10"
              key={step.label}
            >
              <div
                className={`w-7 h-7 md:w-14 md:h-14 rotate-45 relative flex items-center justify-center transition-all duration-700 ${squareStyles[state]}`}
              >
                {/* Glassy background */}
                <div className="absolute inset-0 rounded-[6px] bg-gradient-to-br from-white/60 via-white/10 to-blue-100/30 backdrop-blur-md border border-white/40 shadow-lg" />
                {/* Edge highlight */}
                <div className="absolute inset-0 rounded-[6px] border-2 border-white/60 opacity-30" />
                {/* Subtle reflection */}
                <div className="absolute left-2 top-2 w-2/3 h-2/5 rounded-full bg-white/40 opacity-40 blur-sm" />
                {/* Optional: faint cube lines */}
                <div className="absolute left-1/2 top-0 h-full w-0.5 bg-white/20 -translate-x-1/2" />
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2" />
              </div>
              <div className="flex flex-col items-center justify-start md:justify-between gap-5 h-fit md:h-64 w-full">
                <h3
                  className={`uppercase text-2xl transition-all duration-700 ${textStyles[state]}`}
                >
                  {step.label}
                </h3>
                <p
                  className={`text-center text-sm md:text-base transition-all duration-700 ${textStyles[state]}`}
                >
                  {step.text}
                </p>
                <p
                  className={`hidden md:flex text-center mt-2 md:mt-[20vh] pointer-events-none select-none ${textStyles[state]} transition-all duration-700 text-gray-800`}
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
            </div>
          );
        })}
      </div>
      {/* Floor rectangle */}
    </section>
  );
};
export default Process;
