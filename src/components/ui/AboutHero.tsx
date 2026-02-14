import React from "react";
import { motion } from "framer-motion";
import { Button } from "./button";
import ala from "@/assets/ala.jpg"; // Reusing the visual asset
import { TiltEffect } from "./TiltEffect";
import { useNavigate } from "react-router-dom";

export const AboutHero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-[5rem] lg:gap-[7.5rem] py-20">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-[85%] lg:w-[30rem] text-center lg:text-left order-2 lg:order-1"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white montserrat mb-6 leading-tight">
          Crafting Digital <br />
          <span className="text-blue-500">Experiences</span>
        </h1>
        <p className="text-gray-400 Poppins text-lg md:text-xl mb-8 leading-relaxed">
          I'm Ala jido, a Computer Scientist with a passion for building
          consistent, accessible, and pixel-perfect web interfaces. With 5 years
          of experience, I bridge the gap between design and technology.
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
            onClick={() => window.open("/resume", "_blank")}
          >
            Download CV
          </Button>
          <Button
            variant="outline"
            className="border-gray-600 text-gray-300 hover:text-white hover:border-white py-3 px-8 rounded-full transition-all duration-300"
            onClick={() => navigate("/")} // Assuming contact is on home or a modal
          >
            Contact Me
          </Button>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-[90%] sm:w-[90%] md:w-[78%] lg:w-[26rem] aspect-square rounded-full overflow-hidden order-1 lg:order-2"
      >
        <TiltEffect>
          <div className="relative w-full h-full">
            <img
              src={ala}
              alt="Ala jido"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
          </div>
        </TiltEffect>
      </motion.div>
    </div>
  );
};
