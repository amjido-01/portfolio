import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/experienceData";

export const Experience: React.FC = () => {
  return (
    <div className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-white montserrat mb-12 text-center"
      >
        Work Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {experienceData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#111827] border border-gray-800 p-8 rounded-2xl hover:border-blue-500/50 transition-colors duration-300 group"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white montserrat group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-blue-500 font-medium">{item.company}</p>
              </div>
              <span className="text-gray-500 text-sm mt-2 md:mt-0 font-mono bg-gray-900 px-3 py-1 rounded-full border border-gray-800">
                {item.date}
              </span>
            </div>

            <p className="text-gray-400 Poppins mb-6 leading-relaxed">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {item.skills?.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs text-gray-300 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
