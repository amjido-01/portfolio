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

export const Blogs: React.FunctionComponent = () => {
  // State to manage expanded image
  const [expandedImageId, setExpandedImageId] = useState<number | null>(
    ImageData[0].id
  );

  // Handler to manage expanded image
  const handleExpand = (id: number) => {
    if (expandedImageId === id) return;
    setExpandedImageId(id);
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
          {ImageData.map((img: Image) => (
            <img
              key={img.id}
              className={`${
                expandedImageId === img.id ? "w-[38rem]" : "w-[18rem]"
              } rounded-[1.5rem] h-[35rem] cursor-pointer object-content`}
              src={img.src}
              alt={img.alt}
              onClick={() => handleExpand(img.id)}
            />
          ))}
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
