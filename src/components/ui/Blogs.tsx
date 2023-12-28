import React, { useState } from 'react';
import { Button } from './button';
import blog1 from '@/assets/blog1.png'
// Import ImageData array and Image interface
// import { ImageData, Image } from '../../ImageData';

// Component summary 
/**
 * Blogs component renders a list of blog images.
 * It manages an expanded image state to enlarge image on click.
 * Renders main content:
 * - Page heading
 * - Image grid with expand handler
 */

interface ComponentProps {
  // Define any props here if needed
  expanded: number | null
}
// style={{ whiteSpace: expanded === 0 ? 'normal' : 'nowrap' }}
const FirstBlog: React.FunctionComponent<ComponentProps> = ({expanded}) => {
  return <div className={`${expanded === 0 && 'pt-[2.37rem] pl-[3.12rem]'} bg-[#5D8FBD] h-full rounded-[1.5rem] pt-[2rem]`}>

    <div className='border-2'>
      <span className='circle bg-[#D9D9D9] w-[2.625rem] h-[2.625rem] rounded-[50%] border-2 block'></span>

      <h2 className={`${expanded === 0 ? 'text-red-600 w-[24.8125rem]' : 'w-[13.5625rem]'} text-[#0B1121] montserrat style font-black capitalize border-2 text-[2.25rem] `}
       
      >Blogs title come in here</h2>
    </div>

    <div className='flex gap-[3.34rem] border-2 border-red-500 mt-[0.4rem]'>
      <Button className={`${expanded === 0 ? 'block' : 'hidden'}`}>Read More</Button>
      <img className={`${expanded === 0 ? 'w-[18.91406rem] h-fit' : ' w-[15.74813rem]'} object-scale-down`} src={blog1} alt="" />
    </div>
  </div>
}
const SecondBlog: React.FunctionComponent<ComponentProps> = () => {
  return <div>Hello from blog two</div>
}
const ThirdBlog: React.FunctionComponent = () => {
  return <div>Hello from blog three</div>
}

export const Blogs: React.FunctionComponent = () => {
   const componentList: React.FC<ComponentProps>[] = [FirstBlog, SecondBlog, ThirdBlog]

  // State to manage expanded image
  const [expandedImageId, setExpandedImageId] = useState<number | null>(0);

  // Handler to manage expanded image
  const handleExpand = (index: number) => {
    if (expandedImageId === index) return;
    setExpandedImageId(index);
  };

 
  // Render
  return (
    <main className="mt-[7.88rem] md:mt-[7.94rem]">
      {/* Heading section*/}
      <div className="w-[85%] mx-auto">
        {/* Heading title*/}
        <h1 className="montserrat text-[#fff] text-[1.5rem] md:text-[2.25rem] font-black leading-normal capitalize my-[1.38rem] md:my-[4rem]">
          My Blogs
        </h1>
        {/* Heading description*/}
        <article className="hidden lg:flex gap-[1rem] justify-center">
           {componentList.map((Component, index) => (
          <div
            key={index}
            className={`${
              expandedImageId === index ? "w-[38rem]" : "w-[18rem]"
            } border-2 h-[35rem] cursor-pointer`}
              onClick={() => handleExpand(index)}
          >
            <Component expanded={expandedImageId}/>
          </div>
        ))}
        </article>
        <article className="flex flex-col lg:hidden gap-[1.5rem] justify-center">
           {componentList.map((Component, index) => (
          <div
            key={index}
              className={`w-[18.75rem] border-2 h-[29.25rem] md:w-[38rem] md:h-[55rem] rounded-[1.5rem] cursor-pointer mx-auto object-cover`}
          >
            <Component />
          </div>
        ))}
        </article>
      </div>
    </main>
  );
};
