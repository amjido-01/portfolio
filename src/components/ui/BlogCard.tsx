import React from "react";
import { motion } from "framer-motion";
import { Button } from "./button";

interface blogcardprops {
  id: number;
  src: string;
  title: string;
  content: string;
  background?: string; // Optional now, as we override it
  shadow?: string; // Optional
  active?: boolean;
}

export const BlogCard: React.FC<blogcardprops> = ({
  src,
  title,
  content,
  id,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: id * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-[#111827] border border-gray-800 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay" />
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white montserrat mb-3 line-clamp-2 leading-tight group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 Poppins text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
          {content}
        </p>

        <div className="mt-auto">
          <Button
            variant="link"
            className="p-0 h-auto text-blue-500 hover:text-blue-400 font-medium"
          >
            Read Article →
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
