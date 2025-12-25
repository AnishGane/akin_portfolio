import { motion } from "motion/react";

const LandingSection = ({ showContent }: { showContent: boolean }) => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={showContent ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1], // easeOutExpo-like
        }}
        className=" z-10 min-h-screen flex flex-col items-center justify-center will-change-transform"
      >
        <div className="relative   max-w-fit">
          <span className="text-[25.5rem] bg-linear-to-b from-neutral-800 via-neutral-600 to-neutral-400 bg-clip-text text-transparent leading-none">
            A
          </span>

          <div className="absolute bottom-[18%] text-center leading-6 left-1/2 -translate-x-1/2">
            <span className="text-[44px] text-nowrap font-semibold">
              Akin Nanju
            </span>
            <p className="text-neutral-600">UI/UX Designer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={showContent ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1], // easeOutExpo-like
        }}
        className="absolute bottom-15 tracking-wide font-medium  text-gray-600/70 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex items-center flex-col justify-center gap-2">
          <p className="uppercase">Scroll</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler animate-bounce icons-tabler-outline icon-tabler-chevron-down"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 9l6 6l6 -6" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
};

export default LandingSection;
