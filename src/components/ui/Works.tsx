import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ProjectInfor } from "@/ProjectInfor";
import { ProjectCard } from "./ProjectCard";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// Component summary
export const Works: React.FunctionComponent = () => {
  const navigate = useNavigate();

  // Render
  return (
    <div className="my-[12rem] md:my-[8.75rem] mb-[7rem]">
      <div className="w-[85%] mx-auto">
        {/* Heading */}
        <h1 className="capitalize montserrat text-center text-[1.5rem] md:text-[2.25rem] font-black leading-normal text-[#fff] my-[1.38rem] md:my-[4rem]">
          My works
        </h1>
        <p className="text-[#aaa] text-center text-[0.875rem] md:text-[1rem] -mt-[1rem] md:-mt-[2.5rem] mb-[2rem] md:mb-[3rem] sub-intro">
          A selection of projects I've designed and built end-to-end
        </p>

        {/* Project card grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] md:gap-[2rem]"
        >
          {ProjectInfor.map((item, index) => (
            <ProjectCard
              key={item.id}
              title={item.title}
              description={item.description}
              img={item.img}
              hash={item.hash}
              technologies={item.technologies}
              route={item.route}
              index={index}
            />
          ))}
        </motion.div>

        {/* See More button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-[3rem] md:mt-[4rem]"
        >
          <button
            onClick={() => navigate("/projects")}
            className="btn text-[#fff] py-[0.65rem] px-[2.5rem] md:py-[1rem] md:px-[4rem] rounded-[0.25rem] text-[0.76019rem] md:text-[1rem] capitalize leading-[120%] font-bold montserrat hover:opacity-90 transition-opacity duration-200"
          >
            See More Projects
          </button>
        </motion.div>
      </div>
    </div>
  );
};
