import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/experienceData";

export const Skills: React.FC = () => {
  return (
    <div className="py-20 border-t border-gray-800/50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-white montserrat mb-12 text-center"
      >
        Technical Skills
      </motion.h2>

      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-[#1F2937] text-gray-200 px-6 py-3 rounded-xl font-medium border border-gray-700 hover:border-blue-500 hover:text-blue-400 hover:bg-[#111827] transition-all duration-300 cursor-default shadow-lg"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
