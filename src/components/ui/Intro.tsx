/**
 * Intro component displays an animated introduction section.
 *
 * Imports React and framer-motion for animations.
 * Renders a div with motion animated text and the SubIntro component.
 * Exported as a React functional component.
 */
import React from "react";
import { SubIntro } from "./SubIntro";
import { motion } from "framer-motion";



// intro component summary
export const Intro: React.FunctionComponent = () => {
  // intro component code
  return (
    <div className="text-[#fff]">
      <div className="relative w-[20rem] sm:w-[30rem] md:w-[46.625rem] lg:w-[48rem] md:h-[11.8125rem] mx-auto uppercase">
        { /* Animated text */ }
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="intro text-[2rem] md:text-[3.25rem] leading-[120%] md:text-start"
        >
          Built to Perform. Designed to Convert.{" "}
          <span className="lg:hidden intro">into Digital</span>
        </motion.h1>
        { /* Animated subtext */ }
        {/* <div className="spin-text-container flex justify-start border2 h-[30px] md:h-[60px] intro text-[2rem] md:text-[3.25rem] leading-[120%]">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden intro textcenter md:text-start lg:block"
          >
            into Digital
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="word text-start"
          >
            <span className="gradient-text">Reality</span>
            <span className="gradient-text">Experience</span>
            <span className="gradient-text">Revolution</span>
            <span className="gradient-text">Excellence</span>
            <span className="gradient-text">Innovation</span>
          </motion.div>
        </div> */}
        {/* animated subtext */}
        <div>
          <SubIntro />
        </div>
      </div>
    </div>
  );
};
