import React from 'react';
import {Button} from "./button";
import { LgDownArrow } from './LgDownArrow';
import { SmDownArrow } from './SmDownArrow';
// import union from "../../assets/union.svg"
import smUnion from "@/assets/smUnion.svg";
import lgUnion from "@/assets/lgUnion.svg"
// import { MdStars } from './MdStarts';
// import { Start } from './Star';
import { HamburgerMenu } from './HamburgerMenu';
import { Intro } from './Intro';
import { SubIntro } from './SubIntro';
// import Star from "../../assets/Star.svg"
export const Hero: React.FunctionComponent  = () => {
  return (
    <div
    className="hero hero-bg text-white pt-20 relative overflow-hidden">
      <HamburgerMenu />
   <div>
       <img src={smUnion} alt="" className='absolute top-0 right-0 block sm:hidden'/>
   
      <img src={lgUnion} className='absolute hidden sm:block -top-[5rem] -right-[16rem] md:-top-8 md:-right-[10rem] lg:right-0' />
      <div className=' md:w-[86%] mt-[60px] md:mt-[150px] mx-auto'>
        <Intro />
          <div className='text-center'>
            <SubIntro />
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
