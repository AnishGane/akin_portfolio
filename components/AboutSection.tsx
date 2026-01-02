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
          viewport={{ margin: "-25% 0px -25% 0px" }}
          transition={{ ...fadeUp.transition, delay: 0.15 }} // small stagger
          className="max-w-sm md:max-w-2xl mx-auto mt-8 text-neutral-600 text-sm md:text-base"
        >
          I’m a student designer passionate about turning strong concepts into
          meaningful digital experiences. I create clean, engaging interfaces
          where layout, color, and motion work together with purpose. I focus on
          exploring ideas deeply and refining details until every design feels
          intentional and balanced. <br />
          <br />
          Through hands-on projects, I’m building my skills in modern UI
          patterns, animations, and interaction design, always pushing my limits
          to improve and deliver polished, thoughtful work.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutSection;
