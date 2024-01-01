import React from 'react';
import { Button } from './button';
import { ReadMore } from './ReadMore';

interface blogcardprops {
    id: number
    src: string;
    title: string;
    content: string;
}

export const BlogCard: React.FunctionComponent<blogcardprops> = ({src, title, content, id}) => {
  const isEven = id % 2 === 0;
  return (
    <div className='bg-[#fff] h-full rounded-[1.5rem]'>
      {isEven ? (<div className=''>

        <div className='border-2 flex justify-center items-center'>
        <div>
         <h3 className='text-[#000] style font-black leading-normal capitalize md:w-[19.56675rem] border-2 montserrat md:text-[1.43169rem]'>
          {title}
        </h3>
        <p className='md:w-[17.29988rem] mt-[0.7rem] text-[#000000] leading-normal Poppins text-[0.83519rem] style font-medium capitalize border-2'>
          {content}
          </p>

        <Button
              size="lg"
              variant="link"
              className="border-b-2 text-[#000] border-black flex justify-center gap-4 py-[0.65rem] px-[0.5rem] rounded-none md:py-[1rem] text-[0.76019rem] md:text-[1rem] capitalize leading-[120%] hover:no-underline md:px-[1.5rem] style"
            >
              Read More <ReadMore className=' fill-black'/>{" "}
        </Button>
        </div>
        </div>

        <div className='mt-[2.5rem]'>
           <img src={src} alt="blog" className='w-[26rem] h-[50%] md:h-[50%]' />
        </div>

      </div>
      ) : (
        <div>
          <div>
            <img src={src} alt="blog" className='w-[26rem] h-[50%] md:h-[50%]' />
          </div>

          <div className='border-2 flex justify-center items-center mt-[2.5rem]'>
          <div>
          <h3 className='text-[#000] style font-black leading-normal capitalize md:w-[19.56675rem] border-2 montserrat md:text-[1.43169rem]'>
            {title}
          </h3>
          <p className='md:w-[17.29988rem] mt-[0.7rem] text-[#000000] leading-normal Poppins text-[0.83519rem] style font-medium capitalize border-2'>
            {content}
            </p>

          <Button
                size="lg"
                variant="link"
                className="border-b-2 text-[#000] border-black flex justify-center gap-4 py-[0.65rem] px-[0.5rem] rounded-none md:py-[1rem] text-[0.76019rem] md:text-[1rem] capitalize leading-[120%] hover:no-underline md:px-[1.5rem] style"
              >
                Read More <ReadMore className=' fill-black'/>{" "}
          </Button>
          </div>
          </div>
        </div>
      )}
      
    </div>
  )
}
