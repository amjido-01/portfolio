import React, { useState } from 'react';
// Import ImageData array and Image interface
import { ImageData, Image } from '../../ImageData';

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
}

const FirstBlog: React.FunctionComponent<ComponentProps> = () => {
  return <div className='text-white text-4xl'>Hello from blog one</div>
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
            } rounded-[1.5rem] border-2 h-[35rem] cursor-pointer object-content`}
              onClick={() => handleExpand(index)}
          >
            <Component />
          </div>
        ))}
          {/* {ImageData.map((img: Image) => (
            <img
              key={img.id}
              className={`${
                expandedImageId === img.id ? "w-[38rem]" : "w-[18rem]"
              } rounded-[1.5rem] border-2 h-[35rem] cursor-pointer object-content`}
              // src={img.src}
              alt={img.alt}
              onClick={() => handleExpand(img.id)}
            />
          ))} */}
        </article>
        <article className="flex flex-col lg:hidden gap-[1.5rem] justify-center">
          {ImageData.map((img: Image) => (
            <img
              key={img.id}
              className={`w-[18.75rem] h-[29.25rem] md:w-[38rem] md:h-[55rem] rounded-[1.5rem] cursor-pointer mx-auto object-cover`}
              src={img.src}
              alt={img.alt}
              onClick={() => handleExpand(img.id)}
            />
          ))}
        </article>
      </div>
    </main>
  );
};
