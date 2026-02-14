import React from "react";
import { Navbar } from "@/components/ui/Navbar";
import { AboutHero } from "@/components/ui/AboutHero";
import { Experience } from "@/components/ui/Experience";
import { Skills } from "@/components/ui/Skills";
import { Footer } from "@/components/ui/Footer";

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B1121] overflow-x-hidden">
      <Navbar />
      <div className="w-[85%] sm:w-[90%] lg:w-[85%] mx-auto pt-24">
        <AboutHero />
        <Experience />
        <Skills />
      </div>
      <Footer />
    </div>
  );
};
