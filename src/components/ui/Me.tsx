import React from 'react';
import ala from "@/assets/ala.png";
import {Button} from "./button";
import { ReadMore } from './ReadMore';
import { Paragraph } from './Paragraph';

export const Me: React.FunctionComponent = () => {
  return (
    <section className='bg-[#0d1226] h-[30re mb-20 pt-20 overflow-hidden border2'>
        <div className='md:w-[80rem] border2 mx-auto block md:flex justify-between items-center'>

       <div className='w-full md:w-1/2'>
         <img src={ala} className='w-[18.625rem] h-[18.625rem] border2 md:w-[30rem] md:h-[30rem] mx-auto' alt="" />
       </div>

        <div className='border2 w-full md:w-1/2 mt-20'>
          <div className="content border2 capitalize leading-normal text-center md:text-start">
            <h2 className='montserrat text-[#fff] text-[1.5rem] md:text-[2.25rem] font-bold style'>Hi there, I’m Ala jido </h2>
            <Paragraph  value="a frontend developer with 2+ years' experience and a Computer Science student. Specializing in ReactJS, I'm dedicated to creating modern, user-friendly interfaces with a focus on accessibility. My dedication to innovation and commitment to excellence are the cornerstones of my approach. Let's build something extraordinary together – your vision, my expertise."/>
             {/* <Word value="a frontend developer with 2+ years' experience and a Computer Science student. Specializing in ReactJS, I'm dedicated to creating modern, user-friendly interfaces with a focus on accessibility. My dedication to innovation and commitment to excellence are the cornerstones of my approach,  Proficient in solving complex interface challenges. Let's build something extraordinary together – your vision, my expertise."/> */}
            {/* <p className='border-2 mx-auto md:mx-0 w-[19.25rem] md:w-[31.5rem]  text-[#ccc] text-[0.875rem] md:text-[1.25rem] font-normal'>a frontend developer with 2+ years' experience and a Computer Science student. Specializing in ReactJS, I'm dedicated to creating modern, user-friendly interfaces with a focus on accessibility.  My dedication to innovation and commitment to excellence are the cornerstones of my approach,  Proficient in solving complex interface challenges. Let's build something extraordinary together – your vision, my expertise.</p> */}
          </div>
          
          <div className="footer flex mt-[1.875rem] gap-[1.875rem]">
             <Button size="lg" className='btn text-[#fff] py-[0.75rem] rounded-[0.25rem] px-[2.5rem] md:w-[12.5rem] md:h-[3.125rem] md:py-[1rem] text-[0.76019rem] md:text-[1rem] capitalize leading-[120%] md:px-[4rem]'>Download CV</Button>
             <Button size="lg" variant="link" className=' text-[#fff] border2 flex gap-4 py-[0.75rem] rounded-[0.25rem] px-[2.5rem] md:w-[12.5rem] md:h-[3.125rem] md:py-[1rem] text-[0.76019rem] md:text-[1rem] capitalize leading-[120%] md:px-[2rem] underline underline-offset-[19px]'><span>Read More</span> <ReadMore /> </Button>
          </div>
        </div>
        </div>
    </section>
  )
}
