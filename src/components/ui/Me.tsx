/**
 * Me component renders a section with my introduction.
 *
 * It contains my photo, name, bio text, and call to action buttons.
 *
 * The component is exported so it can be reused across the app.
 */
import React from "react";
import ala from "@/assets/ala.png";
import { Button } from "./button";
import { ReadMore } from "./ReadMore";
import { TiltEffect} from './TiltEffect'

// component summary
export const Me: React.FunctionComponent = () => {
  // component code
  return (
    <main className="mt-[10rem] md:mt-[15rem]">
      {/* section 1: intro text and photo*/}
      <div className="mx-auto w-[85%] sm:w-[90%] lg:w-[85%] flex flex-col gap-[5rem] lg:flex-row justify-center lg:gap-[7.5rem] items-center lg:h-[31.0006rem]">
        { /* photo*/}
        <div className="w-[90%] sm:w-[90%] md:w-[78%] lg:w-[26.00006rem]">
           <TiltEffect>
            <img src={ala} className="mx-auto" alt="my pic" />
          </TiltEffect>
        </div>
        { /* intro text*/}
        <div className="w-full md:w-[85%] lg:w-[30.00006rem] sm:text-start">
          <div className="content capitalize leading-normal p-2 md:p-0">
            <h1 className="montserrat text-[#fff] text-[1.5rem] md:text-[2.25rem] style font-black leading-normal capitalize">
              Hi there, I’m Ala jido{" "}
            </h1>
          { /* bio text*/}
            <p className="prety Poppins text-[#ccc] text-[0.875rem] md:text-[1.25rem] style mt-[1rem] md:my-[1.88rem] font-normal normal-case">
              Computer scientist with 2+ years of experience crafting
              user-centric interfaces in ReactJS. Prioritizing accessibility,
              I'm passionate about collaborating on projects that make a
              difference.
            </p>
          </div>
          { /* call to action buttons*/}
          <div className="footer flex mt-[2rem] justifybetween gap-[2rem] px-2 md:p-0 sm:justify-normal sm:gap-[4rem] items-end md:w-full mx-auto md:mx-0">
            <Button
              size="lg"
              className="btn text-[#fff] py-[0.65rem] rounded-[0.25rem] px-[2rem] md:w-[12.5rem] md:h-[3.125rem] md:py-[1rem] text-[0.76019rem] md:text-[1rem] capitalize leading-[120%] style md:px-[4rem]"
            >
              Download CV
            </Button>
            <Button
              size="lg"
              variant="link"
              className="border-b-2 text-[#fff] border2 flex justify-center gap-4 py-[0.65rem] px-[0.5rem] rounded-none md:py-[1rem] text-[0.76019rem] md:text-[1rem] capitalize leading-[120%] hover:no-underline md:px-[1.5rem] style"
            >
              Read More <ReadMore className=" fill-white"/>{" "}
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};
