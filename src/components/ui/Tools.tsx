/**
 * Tools section — displays a grid of tools and technologies
 * with animated cards using framer-motion whileInView.
 */
import React from "react";
import { motion } from "framer-motion";
import { toolsData } from "@/experienceData";

const categoryColors: Record<string, string> = {
  Language:  "text-[#a78bfa]",
  Framework: "text-[#60a5fa]",
  Styling:   "text-[#f472b6]",
  Backend:   "text-[#34d399]",
  Tooling:   "text-[#fb923c]",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export const Tools: React.FC = () => {
  return (
    <section className="py-[5rem] md:py-[7rem] border-t border-white/10">
      <div className="w-[85%] mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[3rem] md:mb-[4rem]"
        >
          <h1 className="capitalize montserrat text-center text-[1.5rem] md:text-[2.25rem] font-black leading-normal text-[#fff] my-[1.38rem] md:my-[1rem]">
            Tools & Technologies
          </h1>
          <p className="text-[#aaa] text-[0.875rem] md:text-[1rem] mt-[0.75rem] sub-intro">
            The stack I rely on to ship high-quality products
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-[1rem] md:gap-[1.5rem]"
        >
          {toolsData.map((tool) => (
            <motion.div
              key={tool.name}
              variants={cardVariants}
              whileHover={{ scale: 1.07, y: -6 }}
              className="group flex flex-col items-center justify-center gap-[0.6rem] p-[1rem] md:p-[1.25rem] rounded-[1rem] bg-[#111827] border border-white/10 hover:border-white/25 hover:shadow-[0_0_20px_rgba(147,71,251,0.12)] transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] flex items-center justify-center rounded-[0.5rem] bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-[1.6rem] h-[1.6rem] md:w-[2rem] md:h-[2rem] object-contain"
                />
              </div>
              {/* Name */}
              <span className="text-[#e5e7eb] text-[0.7rem] md:text-[0.8rem] font-semibold text-center leading-tight montserrat">
                {tool.name}
              </span>
              {/* Category */}
              <span className={`text-[0.6rem] md:text-[0.65rem] font-medium ${categoryColors[tool.category] ?? "text-gray-400"}`}>
                {tool.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
