import React from 'react';
import ala from "@/assets/ala.png";
import {Button} from "./button";
import { ReadMore } from './ReadMore';

export const Me: React.FunctionComponent = () => {
  return (
    <section className='border2 h-[30re mt-[10rem] md:mt-[15rem] overflow-hidden'>

        <div className='mx-auto w-[90%] lg:w-[85%] flex flex-col sm:flex-col gap-[5rem] lg:flex-row justify-center  lg:gap-[7.5rem] items-center border2'>

        <div className='w-[95%] sm:w-[90%] md:w-[85%] lg:w-[30.00006rem]'>
          <img src={ala} className='mx-auto' alt="my pic" />
        </div>

          <div className='w-full md:w-[85%] lg:w-[30.00006rem]'>
            <div className="content capitalize leading-normal border2 pl-2 md:pl-0">
              <h1 className='montserrat border2 text-[#fff] text-[1.5rem] md:text-[2.25rem] style font-bold leading-normal capitalize'>Hi there, I’m Ala jido </h1>

              <p className='border2 Poppins text-[#ccc] text-[0.875rem] md:text-[1.25rem] style md:my-[1.88rem] font-normal normal-case'>Frontend Developer and Computer Science Student with over 2 years of experience. Specializing in ReactJS, I'm committed to crafting cutting-edge, user-centric interfaces, prioritizing accessibility. Let's collaborate to bring your vision to life – your goals, my expertise.</p>
            </div>
            
            <div className="footer flex mt-[1.875rem] justify-between sm:justify-normal sm:gap-[4rem]  md:justify-between items-end md:w-full mx-auto md:mx-0">
              <Button size="lg" className='btn text-[#fff] py-[0.75rem] rounded-[0.25rem] px-[2.5rem] md:w-[12.5rem] md:h-[3.125rem] md:py-[1rem] text-[0.76019rem] md:text-[1rem] capitalize leading-[120%] style md:px-[4rem]'>Download CV</Button>
              <Button size="lg" variant="link" className='border-b-2 text-[#fff] border2 flex justify-center gap-4 py-[0.75rem] px-[1.5rem] rounded-none md:py-[1rem] text-[0.76019rem] md:text-[1rem] capitalize leading-[120%] md:px-[2.2rem] style'><span>Read More</span> <ReadMore /> </Button>
            </div>
          </div>

        </div>
    </section>
  )
}
