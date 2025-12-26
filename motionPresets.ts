import type { MotionProps } from "motion/react";

export const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 6 },
  whileInView: { opacity: 1, y: 0 },
  viewport: {
    margin: "-20% 0px -15% 0px",
  },
  transition: {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  },
};
