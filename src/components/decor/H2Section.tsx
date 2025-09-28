import styles from "../../style";

type H2SectionProps = {
  showHeading: boolean;
  heading: string;
};

const H2Section = ({ showHeading, heading }: H2SectionProps) => {
  return (
    <div className={`${styles.textCenter} flex flex-col`}>
      <h2
        className={`
          text-4xl uppercase transition-all duration-700 ${
            showHeading
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-8"
          }
        `}
      >
        {heading}
      </h2>

      {/* Mirror reflection */}
      <h2
        className={`
          text-4xl uppercase pointer-events-none select-none opacity-40 transition-all duration-700 ${
            showHeading ? "translate-x-0" : "-translate-x-8"
          }
        `}
        style={{
          transform: "scaleY(-1)",
          maskImage: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
        }}
      >
        {heading}
      </h2>
    </div>
  );
};

export default H2Section;
