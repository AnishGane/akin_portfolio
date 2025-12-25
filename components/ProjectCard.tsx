import Image from "next/image";

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
    <div className="bg-[#F9F8F6] ring-1 ring-neutral-300 hover:shadow-md hover:-translate-y-1 transition-transform duration-400 ease-in-out rounded-md overflow-hidden  ">
      <div>
        <Image
          src={image}
          alt={name}
          width={300}
          height={400}
          className="w-full h-75 object-cover"
        />
      </div>
      <div className="pt-5 pb-3.5 px-3.5 flex items-center justify-between text-neutral-800">
        <h3 className="text-[15px]  font-medium">{name}</h3>
        <a href={link} target="_blank">
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
    </div>
  );
};

export default ProjectCard;
