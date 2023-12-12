import React from 'react';
import {Button} from "./button";
import { LgDownArrow } from './LgDownArrow';
import { SmDownArrow } from './SmDownArrow';
import smUnion from "@/assets/smUnion.svg";
import lgUnion from "@/assets/lgUnion.svg";
import { HamburgerMenu } from './HamburgerMenu';
import { Intro } from './Intro';
import { Me } from './Me';
export const Hero: React.FunctionComponent  = () => {
  return (
    <div
    className="hero hero-bg text-white pt-[20px] relative overflow-hidden">
      <HamburgerMenu />
        <img src={smUnion} alt="" className='absolute -top-0 right-0 block sm:hidden'/>
   
      <img src={lgUnion} className='absolute hidden sm:block -top-[5rem] -right-[16rem] md:-top-[1rem] md:-right-[14rem] lg:-right-[2rem]' />

     <div className='h-[100vh]'>
       <div className='mx-auto flex justify-center'>
      <div className='w-[85%] mt-[8.87rem] md:mt-[15rem]'>
    <Intro />
   </div>
      </div>
      <div className="mt-[3.8rem] md:mt-[8rem] lg:mt-[4rem] flex justify-center items-center">
        <Button size="lg" className='btn text-[#fff] py-[0.75rem] rounded-[0.25rem] px-[2.5rem] md:w-[12.5rem] md:h-[3.125rem] md:py-[1rem] text-[0.76019rem] md:text-[1rem] capitalize leading-[120%] md:px-[4rem]'>Projects</Button>
      </div>

      <div className="down w-[85%] mx-auto">
          <SmDownArrow className=' w-[3.2rem] h-[3.2rem] pl-[1px] mx-auto mt-[7rem] block md:hidden' />
          <LgDownArrow className='hidden md:block w-[4rem] h-[4rem] mt-[7rem] lg:mt-0'/>
        </div>
     </div>

   <Me />
    </div>
  )
}
