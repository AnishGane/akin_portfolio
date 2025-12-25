import React from "react";

const AboutSection = () => {
  return (
    <div
      id="about"
      className=" w-full min-h-screen flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-4xl font-medium">About Me</span>
        <p className="max-w-sm md:max-w-xl mx-auto mt-8 text-neutral-600 text-sm md:text-lg">
          I am a beginner designer developing my foundation in UI/UX and visual
          design. Currently studying and practicing core principles to build a
          strong base for my design career.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
