import { fadeUp } from "@/motionPresets";
import { motion } from "motion/react";
import Badge from "./ui/Badge";


const AboutSection = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen px-4 bg-neutral-100/40 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto text-center">
        <Badge text="Learn more about me" />
        <motion.span
          {...fadeUp}
          viewport={{ margin: "-25% 0px -25% 0px" }}
          className="text-4xl font-medium"
        >
          About Me
        </motion.span>

        <motion.p
          {...fadeUp}
          viewport={{ margin: "-25% 0px -25% 0px"}}
          transition={{ ...fadeUp.transition, delay: 0.15 }} // small stagger
          className="max-w-sm md:max-w-xl mx-auto mt-8 text-neutral-600 text-sm md:text-lg"
        >
          I am a beginner designer developing my foundation in UI/UX and visual
          design. Currently studying and practicing core principles to build a
          strong base for my design career.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutSection;
