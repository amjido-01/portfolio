import React from 'react';
// import {Button} from "./button";
// import { LgDownArrow } from './LgDownArrow';
// import { SmDownArrow } from './SmDownArrow';
// import smUnion from "@/assets/smUnion.svg";
// import lgUnion from "@/assets/lgUnion.svg";
import { HamburgerMenu } from './HamburgerMenu';
import { Intro } from './Intro';
// import { SubIntro } from './SubIntro';
// import { Me } from './Me';
export const Hero: React.FunctionComponent  = () => {
  return (
    <div
    className="hero h-[100svh] hero-bg text-white pt-[20px] border2 relative overflow-hidden">
      <HamburgerMenu />
        {/* <img src={smUnion} alt="" className='absolute -top-4 right-0 block sm:hidden'/> */}
   
      {/* <img src={lgUnion} className='absolute hidden sm:block -top-[5rem] -right-[16rem] md:-top-[1rem] md:-right-[4rem] lg:-right-[1rem]' /> */}
   <div className='w-[80%] mx-auto border2 mt-[9rem]'>
    <Intro />
   </div>

   {/* <Me /> */}
    </div>
  )
}
