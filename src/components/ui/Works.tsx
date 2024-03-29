import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Project } from './Project';
import { useState } from 'react';
// Imports the ImageComponent for use in this component
import { ImageComponent } from "./ImageComponent";
// Imports the ProjectInfor array data component for use in this component
import { ProjectInfor } from '@/ProjectInfor';

// Component summary
export const Works: React.FunctionComponent = () => {
  // State variables to keep track of selected project
  const [selectedProject, setSelectedProject] = useState<number>(0);
  const controls = useAnimation();
  // Handler to handle project selection
  const handleClick = (projectId: number) => {
    controls.start({ opacity: 0, transition: { duration: 0.3 } });
    setTimeout(() => {
      setSelectedProject(projectId);
      controls.start({ opacity: 1, transition: { duration: 0.3 } });
    }, 300);
  };

  const handleRoute = (path: string) => {
    window.location.href=`${path}`
  }
  // Render
  return (
    <div className="my-[12rem] md:my-[8.75rem] mb-[7rem]">
      <div className="w-[85%] mx-auto">
        {/* Section*/}
        <h1 className="capitalize montserrat text-center text-[1.5rem] md:text-[2.25rem] font-black leading-normal text-[#fff] my-[1.38rem] md:my-[4rem]">
          My works
        </h1>

        <div className="lg:flex-row lg:gap-[2.06rem] flex flex-col gap-[2.06rem] sm:gap-[10rem] md:gap-[6.06rem] justify-center items-center">
          {/* Image list */}
          <motion.div
            key={selectedProject}
            className="lg:w-[45%] h-[26.875rem] md:h-[32rem] w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
          >
            {selectedProject !== null && (
              <motion.div
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                className="flex justify-center items-center rounded-[1.5rem]"
              >
                <ImageComponent
                  src={ProjectInfor[selectedProject].img}
                  alt="project thumbnail"
                  hash={ProjectInfor[selectedProject].hash}
                  imageWidth="100%"
                  imageHeight="100%"
                />
              </motion.div>
            )}
          </motion.div>
          {/* Description list */}
          <div className="w-[94%] lg:w-[55%] md:ml-0 lg:mx-auto sm:w-[79%] md:w-[80%] gap-3 sm:gap-[4rem] md:gap-9 lg:gap-10 h-[24.375rem] md:h-[32rem]  flex mt[2.06rem]">
            {/* Description */}
            <div className="flex flex-col items-center justify-center progress-bar">
              {ProjectInfor.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`flx-auto w-[0.1875rem] justify-between h-full items-center bg-white ${
                    index === selectedProject
                      ? "rounded-[10px] w-[0.5rem] mx-auto"
                      : ""
                  } progress-bar-segment`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.3 } }}
                >
                  {/* Progress bar segment */}
                  {/* <span className="rounded-full bullet w-[1.44181rem] h-[1.44181rem] md:w-[2.125rem] md:h-[2.125rem] mx-auto transform -translate-x-[49%] md:-translate-x-[50%] text-white flex items-center justify-center -translate-y-[2px]">
                    {index + 1}.
                  </span> */}
                </motion.div>
              ))}
            </div>
            {/* List */}
            <div className="gap-[1.7rem] pl-2 md:pl-0 md:gap-[3rem] lg:gap-[2.4rem] w-[95%] md:w-full lg:w-[85%] lg:ml-10 flex flex-col">
              {ProjectInfor.map((item) => {
                return (
                  <Project
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    handleClick={() => handleClick(item.id)}
                    handleRoute={() => handleRoute(item.route)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
