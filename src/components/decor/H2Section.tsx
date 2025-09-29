import styles from "../../style";

type H2SectionProps = {
  heading: string;
};

const H2Section = ({ heading }: H2SectionProps) => {
  return (
    <div className={`${styles.textCenter} flex flex-col`}>
      <h2
        className={`
          text-4xl uppercase transition-all duration-700 
        `}
      >
        {heading}
      </h2>

      {/* Mirror reflection */}
      <h2
        className={`
          text-4xl uppercase pointer-events-none select-none opacity-40 transition-all duration-700 
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
