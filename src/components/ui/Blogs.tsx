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
    setExpandedImageId((prevId) => (prevId === id ? null : id));
  };

  // Render
  return (
    <main className="mt-[12rem] md:mt-[8.75rem] hidden lg:block mb-20 border2">
      {/* Heading section*/}
      <div className="w-[85%] mx-auto border2">
        {/* Heading title*/}
        <h1 className="montserrat text-[#fff] text-[1.5rem] md:text-[2.25rem] font-black leading-normal capitalize my-[1.38rem] md:my-[4rem]">
          My Blogs
        </h1>
        {/* Heading description*/}
        <article className="flex gap-[1.5rem] border2 justify-center">
          {ImageData.map((img: Image) => (
            <img
              key={img.id}
              className={`${
                expandedImageId === img.id ? "w-1/2" : "w-[22%]"
              } rounded-[1.5rem] h-[30rem] cursor-pointer object-cover`}
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
