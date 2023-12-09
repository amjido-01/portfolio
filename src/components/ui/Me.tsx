import React from 'react';
import ala from "@/assets/ala.png";
import {Button} from "./button";
import { ReadMore } from './ReadMore';

export const Me: React.FunctionComponent = () => {
  return (
    <section className='bg[#0d1226] border-2 h-[30re md:mt-[15rem] overflow-hidden border2'>
        <div className='border-2 border-red-500 mx-auto block md:flex justify-center gap-[7.5rem] items-center'>

       <div className='w-full md:w-[30.00006rem] border-2'>
         <img src={ala} className='border2 mx-auto' alt="" />
       </div>

        <div className='border2 w-full md:w-[31.5rem] mt-20 border-2'>
          <div className="content border2 capitalize leading-normal">
           
            <p className='border2 text-[#ccc] text-[0.875rem] md:text-[1.25rem] font-normal'>a frontend developer with 2+ years' experience and a Computer Science student. Specializing in ReactJS, I'm dedicated to creating modern, user-friendly interfaces with a focus on accessibility. Let's build something extraordinary together – your vision, my expertise.</p>
          </div>
          
          <div className="footer flex mt-[1.875rem] gap-[1.875rem] w-[95%] mx-auto md:mx-0 border-2">
             <Button size="lg" className='btn text-[#fff] py-[0.75rem] rounded-[0.25rem] px-[2.5rem] md:w-[12.5rem] md:h-[3.125rem] md:py-[1rem] text-[0.76019rem] md:text-[1rem] capitalize leading-[120%] md:px-[4rem]'>Download CV</Button>
             <Button size="lg" variant="link" className='border-b-2 text-[#fff] border2 flex gap-4 py-[0.75rem] px-[2.5rem] rounded-none md:w-[12.5rem] md:h-[3.125rem] md:py-[1rem] text-[0.76019rem] md:text-[1rem] capitalize leading-[120%] md:px-[2rem]'><span>Read More</span> <ReadMore /> </Button>
          </div>
        </div>
        </div>
    </section>
  )
}
