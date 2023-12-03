import React from 'react';
import {Button} from "./button";
import { LgDownArrow } from './LgDownArrow';
import { SmDownArrow } from './SmDownArrow';
// import union from "../../assets/union.svg"
import smUnion from "@/assets/smUnion.svg";
import lgUnion from "@/assets/lgUnion.svg"
// import { MdStars } from './MdStarts';
// import { Start } from './Star';
import {Test } from "./Test"
import { HamburgerMenu } from './HamburgerMenu';
// import Star from "../../assets/Star.svg"
// import Typed from "typed.js";
// import { useEffect } from 'react';
export const Hero: React.FunctionComponent  = () => {
  //  useEffect(() => {
  //   const options = {
  //     strings: [
  //       "Reality",
  //       "Existence",
  //       "Virtual Realm"
  //     ],
  //     typeSpeed: 50,
  //     backSpeed: 50,
  //     smartBackspace: true,
  //     loop: true,
  //   };
  //   const typed = new Typed("#target", options);
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);
  return (
    <div
    className="hero test text-white pt-20 relative overflow-hidden">
      <HamburgerMenu />
      {/* <img src={union} className='absolute -top-[16rem] -right-24' alt="" /> */}
      <div>
        <img src={smUnion} alt="" className='absolute top-0 right-0 block sm:hidden'/>
   
      <img src={lgUnion} className='absolute hidden sm:block -top-[4rem] -right-[14rem] md:-top-8 md:-right-[10rem] lg:right-0' />
      <div className=' md:w-[86%] mt-[60px] md:mt-[150px] mx-auto'>
        <div className="text-center mx-auto text-[#fff]">
          <div className='relative w-[19rem] md:w-[46.375rem] border2 md:h-[7.8125rem] mx-auto'>

            {/* <img src={Star} alt="" className='border-2'/> */}
            {/* <Start className='absolute -left-4 -top-7 border-2'/> */}
            
            <div className='border2 w-fit'>
              <div className=''>
                <Test animationDuration={8} className='absolute -top-[2rem] -left-12 md:-left-14 md:-top-[2.5rem] mx-auto w-[2rem] h-[2rem] md:w-[2.5rem] md:h-[2.5rem]'/>

              <Test animationDuration={5} className='absolute -top-[1rem] -left-10 md:-left-12 md:-top-[2rem] mx-auto w-[2.2rem] h-[2.2rem] md:w-[3.5rem] md:h-[3.5rem]'/>

              <Test animationDuration={4} className='absolute -left-8 -top-[2rem] md:-top-[2.5rem] mx-auto w-[1.5rem] h-[1.5rem]'/>
              </div>
               <Test animationDuration={7} className='absolute left-0 -top-6 md:-top-8 md:left-[1rem] w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem]'/>
                <Test animationDuration={4}  className='absolute -top-[2rem] -left-[1.4rem] md:-left-[1rem] md:-top-[2rem] w-[2.2rem] h-[2.2rem] md:w-[3rem] md:h-[3rem]'/>
              <Test animationDuration={10}  className='absolute borde -top-[1rem] -left-7 md:-top-5 md:-left-[1rem] w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem]'/>
              {/* <Test className='absolute'/>   */}
            </div>
            <h1 className=' intro text-[1.5rem] md:text-[3.25rem] leading-[120%] uppercase'>Transforming Ideas into Digital <span 
          id="target"
          className='gradient-text'>Reality</span></h1>
          </div>

          <p className="w-[17.125rem] h-[3.125rem] md:w-[46.375rem] md:h-[4rem] mx-auto text-[0.875rem] mt-[10px] md:mt-[16px] text-[#ccc] md:text-[1.5rem] sub-intro leading-[120%]"> Frontend Magic, From your vision to reality, witness the  power of turning concepts into captivating  user-centric design.</p>
        </div>
        <div className="btn flex justify-center items-center mt-[4rem]">
          <Button size="lg" className='text-[#fff] py-[0.75rem] rounded-[0.25rem] px-[2.5rem] md:w-[12.5rem] md:h-[3.125rem] md:py-[1rem] text-[0.76019rem] md:text-[1rem] capitalize leading-[120%] md:px-[4rem]'>Projects</Button>
        </div>
        <div className="down">
          <SmDownArrow className=' w-[3.2rem] h-[3.2rem] pl-[1px] mx-auto mt-[7rem] block md:hidden' />
          <LgDownArrow className='hidden  md:block w-[4rem] h-[4rem]'/>
        </div>
      </div>
      </div>
    </div>
  )
}
