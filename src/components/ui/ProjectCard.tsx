import React from "react";
import { motion } from "framer-motion";
import { ImageComponent } from "./ImageComponent";
import { GoLive } from "./GoLive";
import { Button } from "./button";

interface ProjectCardProps {
  title: string;
  description: string;
  img: string;
  hash: string;
  technologies: string[];
  route: string;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  img,
  hash,
  technologies,
  route,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col w-full h-full bg-[#111827] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-colors duration-300"
    >
      {/* Image Container with Zoom Effect */}
      <div className="w-full aspect-video overflow-hidden">
        <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out">
          <ImageComponent src={img} alt={title} hash={hash} />
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            variant="default"
            onClick={() => window.open(route, "_blank")}
            className="bg-white text-black hover:bg-gray-200 font-semibold px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2"
          >
            View Project <GoLive />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white montserrat group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
        </div>

        <p className="text-gray-400 text-sm mb-4 Poppins line-clamp-3">
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="mt-auto flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="text-xs font-medium px-2 py-1 rounded-md bg-gray-800 text-gray-300 border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
