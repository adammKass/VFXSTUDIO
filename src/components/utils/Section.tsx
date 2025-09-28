import { type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

type SectionProps = {
  children: ReactNode;
  direction?: "up" | "right";
};

export default function Section({ children, direction = "up" }: SectionProps) {
  const variants: Record<"up" | "right", Variants> = {
    up: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
    },
    right: {
      initial: { x: "100%", opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
  };

  return (
    <motion.div
      className="h-screen w-screen flex items-center justify-center snap-start"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0 }} // ✅ "once" prevents looping
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={variants[direction]}
    >
      {children}
    </motion.div>
  );
}
