import { JSX } from "react";

const GetInTouch = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full text-center space-y-4">
        <span className="text-4xl font-medium flex flex-col ">
          Get In Touch
        </span>
        <p className="text-neutral-400">
          I'd love to hear from you. Let's create something great together.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <SocialLinkSpan icon={<EmailSVG />} name="akinnanju4@gmail.com" />
          <SocialLinkSpan icon={<LinkedinSVG />} name="Linkedin" />
          <SocialLinkSpan
            icon={<BehanceSVG />}
            name="Behance"
            link="https://www.behance.net/akinnanju1"
          />
        </div>
      </div>
    </div>
  );
};

const EmailSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="icon icon-tabler icons-tabler-filled icon-tabler-mail"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
      <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
    </svg>
  );
};

const BehanceSVG = () => {
  return (
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-behance"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
      <path d="M3 12l4.5 0" />
      <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
      <path d="M16 6l3 0" />
    </svg>
  );
};

const LinkedinSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" />
    </svg>
  );
};

const SocialLinkSpan = ({
  icon,
  name,
  link,
}: {
  icon: JSX.Element;
  name: string;
  link?: string;
}) => {
  return (
    <a href={link} target="_blank">
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
      flex items-center justify-center gap-1.5
      tracking-wide cursor-pointer
      "
      >
        {icon}
        {name}
      </span>
    </a>
  );
};

export default GetInTouch;
