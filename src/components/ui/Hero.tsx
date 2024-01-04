/**
 * Hero component that renders the hero section.
 * Includes the hamburger menu, SVG images, intro text,
 * call to action button, and avatar/bio.
 * Uses responsive Tailwind CSS classes.
 */
import React from "react";
import { Button } from "./button";
import { LgDownArrow } from "./LgDownArrow";
import { SmDownArrow } from "./SmDownArrow";
import smUnion from "@/assets/smUnion.svg";
import lgUnion from "@/assets/lgUnion.svg";
import { HamburgerMenu } from "./HamburgerMenu";
import { Intro } from "./Intro";
import { Me } from "./Me";
import { useNavigate } from "react-router-dom";

// hero component summary
export const Hero: React.FunctionComponent = () => {
  const navigate = useNavigate();

  // render
  return (
    <div className="hero hero-bg text-white pt-[20px] relative overflow-hidden">
      {/* hamburger menu */}
      <HamburgerMenu />
      { /* hamburger menu svg images for mobile view*/}
      <img
        src={smUnion}
        alt=""
        className="absolute right-0 block -top-0 sm:hidden"
      />
      { /* hamburger menu svg images for desktop view*/}
      <img
        src={lgUnion}
        className="absolute hidden sm:block -top-[5rem] -right-[16rem] md:-top-[1rem] md:-right-[14rem] lg:-right-[2rem]"
      />
      {/* hero section */}
      <div className="h-[90vh]">
        <div className="flex justify-center mx-auto">
          <div className="w-[85%] mt-[8.87rem] md:mt-[15rem]">
            { /* intro text and call to action button*/}
            <Intro />
          </div>
        </div>
        <div className="mt-[3.8rem] md:mt-[8rem] lg:mt-[4rem] justify-center items-center flex">
          <Button
            onClick={() => {navigate("/projects")}}
            size="lg"
            className="btn z-[2] text-[#fff] py-[0.65rem] rounded-[0.25rem] px-[2rem] md:w-[12.5rem] md:h-[3.125rem] md:py-[1rem] text-[0.76019rem] md:text-[1rem] capitalize leading-[120%] md:px-[4rem]"
          >
            Projects
          </Button>
        </div>
        {/* down arrow */}
        <div className="down w-[85%] mx-auto">
          <SmDownArrow className=" w-[3.2rem] h-[3.2rem] pl-[1px] mx-auto mt-[7rem] block md:hidden" />
          <LgDownArrow className="hidden md:block w-[4rem] h-[4rem] mt-[7rem] lg:mt-0" />
        </div>
      </div>
      {/* avatar/bio */}
      <Me />
    </div>
  );
};
