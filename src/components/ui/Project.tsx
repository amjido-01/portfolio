import React from 'react';
import { Button } from './button';
import { GoLive } from './GoLive';

type projectProps = {
    title: string;
    description: string;
    handleClick: () => void
}
export const Project: React.FunctionComponent<projectProps> = ({title, description, handleClick}) => {
  return (
    <div className='border2 border-red-500 w-full'>
                <div className=' cursor-pointer border2' onClick={handleClick}>
                    <h2 className='text-[0.875rem] text-[#fff] montserrat md:text-[1.25rem] style font-bold leading-[120%] capitalize'>{title}</h2>
                <p className='Poppins prety my-[0.44rem] text-[0.625rem] text-[#fff] md:text-[1rem] style font-normal leading-[120%]  capitalize w-[15.375rem] md:w-[25.6875rem] md:h-[3.8125rem]'>{description}</p>
                </div>
                <div className='flex gap-[1.36rem] md:gap-[2rem]'>
                  <Button variant="link" className='more Poppins text-[0.625rem] md:text-[0.875rem] hover:no-underline style font-bold leading-[120%]'>More Details</Button>
                  <Button variant="link" className='border-b-2 text-[#fff] border2 flex justify-center gap-4 py-[0.75rem] px-[1.5rem] rounded-none md:py-[1rem] text-[0.76019rem] md:text-[1rem] capitalize leading-[120%] md:px-[2.2rem] style hover:no-underline'>Live view <GoLive/></Button>
                </div>
              </div>
  )
}
