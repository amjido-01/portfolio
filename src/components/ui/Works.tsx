import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import project02 from "@/assets/project02.png";
import project01 from "@/assets/project01.png";
import project03 from "@/assets/project03.png";
import { Project } from './Project';
import { useState } from 'react';
import { ImageComponent } from './ImageComponent';

const projectInfor = [
  {
    id: 0,
    title: "KUSTBoolets",
    description: "Lorem ipsum dolor sit amet consectetur. Amet libero lacus sit sed. Congue pretium nec magna scelerisque eu.",
    img: project01,
    hash: "LZOy@c%2TJVs9t?wT0adK6wcrWx]"
  },
  {
    id: 1,
    title: "Bookbay",
    description: "Lorem ipsum dolor sit amet consectetur. Amet libero lacus sit sed. Congue pretium nec magna scelerisque eu.",
    img: project02,
    hash: "LYPQEQRk%fIU~pt7WAt7Se%Ms;t7"
  },
  {
    id: 2,
    title: "Lamuni",
    description: "Lorem ipsum dolor sit amet consectetur. Amet libero lacus sit sed. Congue pretium nec magna scelerisque eu.",
    img: project03,
    hash: "LhOgQd%M~pRjM{ayWBof~qRj9Gof"
  }
];

export const Works: React.FunctionComponent = () => {
  const [selectedProject, setSelectedProject] = useState<number>(0);
  const controls = useAnimation();

  const handleClick = (projectId: number) => {
    controls.start({ opacity: 0, transition: { duration: 0.3 } });
    setTimeout(() => {
      setSelectedProject(projectId);
      controls.start({ opacity: 1, transition: { duration: 0.3 } });
    }, 300);
  };

  return (
    <div className='mt-[12rem] md:mt-[8.75rem] mb-20 border-2'>
      <div className='w-[85%] mx-auto border-2'>
        <h1 className='text-center montserrat text-[#fff] text-[1.5rem] md:text-[2.25rem] font-black leading-normal capitalize my-[1.38rem] md:my-[4rem]'>My works</h1>

        <div
          className='flex flex-col border-2 gap-[2.06rem] justify-center itemscenter lg:flex-row'
          // animate={controls}
        >
          <motion.div
            key={selectedProject}
            className='w-full lg:w-[45%] h-[26.875rem] md:h-[31rem]  border2'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
          >
            {selectedProject !== null && (
              <motion.div
               initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeOut', duration: 0.3 }}
               className='rounded-[1.5rem] border2 border-red-500 flex justify-center items-center'
              >
                <ImageComponent 
              src={projectInfor[selectedProject].img} 
              alt='project thumbnail'
              hash={projectInfor[selectedProject].hash}
                imageWidth="100%"
                imageHeight="100%"
              />
              </motion.div>
            )}
          </motion.div>

          <div
            className='gap-4 lg:gap-10 w-full h-[27.375rem] md:h-[30rem] md:w-[95%] border2 border-red-500 md:mx-auto lg:w-[55%] flex mt[2.06rem]'
          >
            <div
              className='progress-bar flex flex-col items-center justify-center'
            >
              {projectInfor.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`progress-bar-segment flx-auto w-[0.1875rem] justify-between h-full items-center bg-white ${
                    index === selectedProject ? 'rounded-[10px] w-[0.5rem] mx-auto' : ''
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.3 } }}
                >
                  <span className='rounded-full bullet w-[1.44181rem] h-[1.44181rem] md:w-[2.125rem] md:h-[2.125rem] mx-auto transform -translate-x-[49%] md:-translate-x-[50%] text-white flex items-center justify-center -translate-y-[2px]'>
                    {index + 1}.
                  </span>
                </motion.div>
              ))}
            </div>

            <div className='flex flex-col gap-8 w-[95%] md:w-full lg:w-[85%] md:ml-10'>
              {projectInfor.map((item) => {
                return <Project key={item.id} title={item.title} description={item.description} handleClick={() => handleClick(item.id)} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
