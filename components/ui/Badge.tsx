import { fadeUp } from "@/motionPresets";
import { motion } from "motion/react";

const Badge = ({ text }: { text: string }) => {
  return (
    <motion.p
      {...fadeUp}
      className="badge ring-1 ring-neutral-400/60 w-fit mx-auto rounded-full px-3 tracking-wide text-[9px] mb-2 py-0.5"
    >
      {text}
    </motion.p>
  );
};

export default Badge;
