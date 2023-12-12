import React from 'react';
import project02 from "@/assets/project02.png";
import project01 from "@/assets/project01.png";
import project03 from "@/assets/project03.png";
import { Project } from './Project';
import { useState } from 'react';

const projectInfor = [
  {
    id: 0,
    title: "KUSTBoolets",
    description: "Lorem ipsum dolor sit amet consectetur. Amet libero lacus sit sed. Congue pretium nec magna scelerisque eu.",
    img: project01
  },
  {
    id: 1,
    title: "Bookbay",
    description: "Lorem ipsum dolor sit amet consectetur. Amet libero lacus sit sed. Congue pretium nec magna scelerisque eu.",
    img: project02
  },
  {
    id: 2,
    title: "Lamuni",
    description: "Lorem ipsum dolor sit amet consectetur. Amet libero lacus sit sed. Congue pretium nec magna scelerisque eu.",
    img: project03
  }
]

export const Works: React.FunctionComponent = () => {
  const [selectedProject, setSelectedProject] = useState<number>(0)
    const handleClick = (projectId: number) => {
    setSelectedProject(projectId);
  }

  return (
    <div className='mt-[10.06rem] mb-20'>
        <div className='w-[85%] border2 mx-auto'>
          <h1 className='text-center montserrat text-[#fff] text-[1.5rem] md:text-[2.25rem] font-black leading-normal capitalize my-[1.38rem] md:my-[4rem]'>My works</h1>

          <div className='flex flex-col gap-[2.06rem] justify-center itemscenter lg:flex-row'>

            <div className='border2 w-full lg:w-[45%]'>
                {selectedProject !== null && (
              <img className='mx-auto object-cover rounded-[1.5rem] w-full md:w-[95%]  mxauto lg:w-[28rem] xl:w-[30rem] lg:h-[32rem]' src={projectInfor[selectedProject].img} alt="project" />
            )}
            </div>

            <div className='gap-4 w-full md:w-[95%] md:mx-auto border2 lg:w-[55%] flex mt[2.06rem]'>
            <div className="progress-bar flex flex-col">
            {projectInfor.map((item, index) => (
              <div
                key={item.id}
                className={`progress-bar-segment flex-1 w-[0.1875rem] bg-white ${
                  index === selectedProject ? 'bg-[#FFFFFF] rounded-[10px] w-[0.5rem] md:mr-5' : ''
                }`}
                    >
              <span className="rounded-full bullet w-[1.44181rem] h-[1.44181rem] md:w-[2.125rem] md:h-[2.125rem] transform -translate-x-1/2 text-white flex pl items-center justify-center">{index + 1}.</span>
              </div>
            ))}
          </div>

              <div className='flex flex-col gap-8 w-[95%] md:w-full lg:w-[85%] border2'>
                {projectInfor.map((item) => {
                return  <Project key={item.id} title={item.title} description={item.description} handleClick={() => handleClick(item.id)}/>
              })}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
