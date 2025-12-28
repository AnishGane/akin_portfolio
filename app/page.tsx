"use client";

import AboutSection from "@/components/AboutSection";
import CountUp from "@/components/CountUp";
import GetInTouch from "@/components/GetInTouch";
import LandingSection from "@/components/LandingSection";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/SkillsSection";
import { motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";

const Home = () => {
  const overlayControls = useAnimation();
  // Returns an animation controller object
  // Lets you start animations manually

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const runAnimation = async () => {
      await new Promise((res) => setTimeout(res, 1500));

      await overlayControls.start({
        scaleY: 0,
        transition: {
          duration: 1.3,
          ease: [0.65, 0, 0.35, 1],
        },
      });

      // .start() is a Framer Motion API
      // It Triggers an animation
      // Returns a Promise
      // Resolves when animation finishes

      // slight overlap feels more natural
      setTimeout(() => setShowContent(true), 120);
    };

    runAnimation();
  }, [overlayControls]);

  return (
    <div className="relative overflow-hidden">
      {/* Overlay */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={overlayControls}
        className="fixed inset-0 origin-top bg-white z-50 will-change-transform"
      >
        <div
          className="fixed flex items-center justify-center gap-2 
                  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  text-neutral-500"
        >
          <CountUp
            from={0}
            to={100}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-5xl loading"
          />
        </div>
      </motion.div>

      {/* Content */}
      <LandingSection showContent={showContent} />

      <AboutSection />

      <SkillsSection />

      <Projects />

      <GetInTouch />

      <div className="w-full border-t border-neutral-300 text-sm tracking-wide text-neutral-500 text-center py-6">
        <p>&copy;{new Date().getFullYear()} Akin Nanju. All rights reserved</p>
      </div>
    </div>
  );
};

export default Home;
