import { Skills } from "@/constants/data";

const SkillsSection = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-4xl font-medium flex flex-col">Skills</span>
        <div className="flex flex-wrap justify-center gap-4 mt-8 max-w-4xl mx-auto">
          {Skills.map((skill) => (
            <SkillSpan key={skill.name} name={skill.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillSpan = ({ name }: { name: string }) => {
  return (
    <span
      className="
          border border-neutral-300
          rounded-full
          px-6 py-3
          text-sm
          text-neutral-700
          bg-transparent
          whitespace-nowrap
          hover:bg-neutral-200/60
        "
    >
      {name}
    </span>
  );
};

export default SkillsSection;
