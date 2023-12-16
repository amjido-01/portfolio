import React, { useState } from 'react';
import { ImageData, Image } from '../../ImageData';

console.log(ImageData);

export const Blogs: React.FunctionComponent = () => {
  const [expandedImageId, setExpandedImageId] = useState<number | null>(ImageData[0].id);

  const handleExpand = (id: number) => {
   setExpandedImageId(prevId => prevId === id ? null : id);
  };

  return (
    <main className='mt-[12rem] md:mt-[8.75rem] mb-20 border-2'>
      <div className='w-[85%] mx-auto border-2'>
        <h1 className='montserrat text-[#fff] text-[1.5rem] md:text-[2.25rem] font-black leading-normal capitalize my-[1.38rem] md:my-[4rem]'>
          My Blogs
        </h1>

        <article className='flex gap-[1.5rem] border-2 justify-center'>
          {ImageData.map((img: Image) => (
            <img
              key={img.id}
              className={`${expandedImageId === img.id ? 'w-1/2' : 'w-[22%]'} rounded-[1.5rem] h-[30rem] cursor-pointer`}
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
