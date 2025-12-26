import Image from "next/image";
import { motion } from "motion/react";

const ProjectCard = ({
  image,
  name,
  link,
}: {
  image: string;
  name: string;
  link: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-25% 0px 0% 0px", once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#F9F8F6] ring-1 ring-neutral-300 rounded-md overflow-hidden"
    >
      <motion.div
        initial={{ y: 4, filter: "blur(5px)" }}
        whileInView={{ y: 0, filter: "blur(0px)" }}
        viewport={{ margin: "-25% 0px -25% 0px", once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Image */}
        <div className="relative w-full aspect-3/2 border-b border-b-neutral-300">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-t-md"
          />
        </div>
        {/* Text & Link */}
        <div className="pt-5 pb-3.5 px-3.5 flex items-center justify-between text-neutral-800">
          <h3 className="text-[15px] font-medium">{name}</h3>
          <a href={link} target="_blank">
            {/* SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#726F6C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler hover:stroke-neutral-700 icons-tabler-outline icon-tabler-devices-share"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M13 15v-6a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v4" />
              <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
              <path d="M16 22l5 -5" />
              <path d="M21 21.5v-4.5h-4.5" />
              <path d="M16 9h2" />
            </svg>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
