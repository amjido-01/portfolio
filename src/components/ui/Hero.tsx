import React from 'react';
import {Button} from "./button";
import { LgDownArrow } from './LgDownArrow';
import { SmDownArrow } from './SmDownArrow';
// import smUnion from "@/assets/smUnion.svg";
// import lgUnion from "@/assets/lgUnion.svg"
import { HamburgerMenu } from './HamburgerMenu';
import { Intro } from './Intro';
import { SubIntro } from './SubIntro';
import { Me } from './Me';
export const Hero: React.FunctionComponent  = () => {
  return (
    <div
    className="hero hero-bg text-white pt-[20px] border2 relative overflow-hidden">
      <HamburgerMenu />
   <div>
       {/* <img src={smUnion} alt="" className='absolute -top-[4rem] right-0 block sm:hidden'/> */}
   
      {/* <img src={lgUnion} className='absolute hidden sm:block -top-[5rem] -right-[16rem] md:-top-[7rem] md:-right-[8rem] lg:-right-[10rem]' /> */}
      <div className=' md:w-[86%] mt-[140px] mx-auto'>
        <Intro />
          <div className='text-cente'>
            <SubIntro />
          </div>

        <div className="flex justify-center items-center mt-[4rem]">
          <Button size="lg" className='btn text-[#fff] py-[0.75rem] rounded-[0.25rem] px-[2.5rem] md:w-[12.5rem] md:h-[3.125rem] md:py-[1rem] text-[0.76019rem] md:text-[1rem] capitalize leading-[120%] md:px-[4rem]'>Projects</Button>
        </div>
        <div className="down">
          <SmDownArrow className=' w-[3.2rem] h-[3.2rem] pl-[1px] mx-auto mt-[7rem] block md:hidden' />
          <LgDownArrow className='hidden  md:block w-[4rem] h-[4rem]'/>
        </div>
      </div>
   </div>

   <Me />
    </div>
  )
}
