import { projects } from "@/constants/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="max-w-sm md:max-w-2xl xl:max-w-6xl mx-auto w-full ">
        <span className="text-4xl font-medium flex flex-col text-center">
          Projects
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-10 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
