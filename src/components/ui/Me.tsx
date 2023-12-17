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

// component summary
export const Me: React.FunctionComponent = () => {
  // component code
  return (
    <main className="h-[30re mt-[10rem] md:mt-[15rem] overflow-hidden">
      {/* section 1: intro text and photo*/}
      <div className="mx-auto w-[90%] lg:w-[85%] flex flex-col gap-[5rem] lg:flex-row justify-center  lg:gap-[7.5rem] items-center">
        { /* photo*/}
        <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[26.00006rem]">
          <img src={ala} className="mx-auto" alt="my pic" />
        </div>
        { /* intro text*/}
        <div className="w-full md:w-[85%] lg:w-[30.00006rem]">
          <div className="content capitalize leading-normal pl-2 md:pl-0">
            <h1 className="montserrat border2 text-[#fff] text-[1.5rem] md:text-[2.25rem] style font-black leading-normal capitalize">
              Hi there, I’m Ala jido{" "}
            </h1>
          { /* bio text*/}
            <p className="prety Poppins text-[#ccc] text-[0.875rem] md:text-[1.25rem] style md:my-[1.88rem] font-normal normal-case">
              Aspiring computer scientist with 2+ years of experience crafting
              user-centric interfaces in ReactJS. Prioritizing accessibility,
              I'm passionate about collaborating on projects that make a
              difference.
            </p>
          </div>
          { /* call to action buttons*/}
          <div className="footer flex mt-[2rem] justify-between px-2 md:p-0 sm:justify-normal sm:gap-[4rem]  md:justify-between items-end md:w-full mx-auto md:mx-0">
            <Button
              size="lg"
              className="btn text-[#fff] py-[0.75rem] rounded-[0.25rem] px-[2rem] md:w-[12.5rem] md:h-[3.125rem] md:py-[1rem] text-[0.76019rem] md:text-[1rem] capitalize leading-[120%] style md:px-[4rem]"
            >
              Download CV
            </Button>
            <Button
              size="lg"
              variant="link"
              className="border-b-2 text-[#fff] border2 flex justify-center gap-4 py-[0.75rem] px-[1rem] rounded-none md:py-[1rem] text-[0.76019rem] md:text-[1rem] capitalize leading-[120%] hover:no-underline md:px-[2.2rem] style"
            >
              Read More <ReadMore />{" "}
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};
