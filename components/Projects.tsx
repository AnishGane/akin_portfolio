import { projects } from "@/constants/data";
import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";
import { fadeUp } from "@/motionPresets";
import Badge from "./ui/Badge";

const Projects = () => {
  return (
    <div className="w-full px-5 min-h-screen flex bg-neutral-200/40 pt-10 items-center justify-center">
      <div className="max-w-sm md:max-w-2xl xl:max-w-6xl mx-auto w-full text-center">
        <Badge text="Get a proof of my work" />
        <motion.span
          {...fadeUp}
          viewport={{ ...fadeUp.viewport, once: true }}
          className="text-4xl font-medium flex flex-col "
        >
          Projects
        </motion.span>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-10 auto-rows-fr">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
