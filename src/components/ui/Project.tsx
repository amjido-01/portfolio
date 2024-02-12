/**
 * Project component renders a project card with title, description,
 * and action buttons.
 *
 * Accepts title, description and handleClick props.
 *
 * Renders a div with the project title, description, a "More Details" button,
 * and a "Live View" button.
 */
import React from "react";
import { Button } from "./button";
import { GoLive } from "./GoLive";

// Project props
type projectProps = {
  title: string;
  description: string;
  handleClick: () => void;
  handleRoute: () => void;
};
// Project component
export const Project: React.FunctionComponent<projectProps> = ({
  title,
  description,
  handleClick,
  handleRoute,
}) => {
  // component renders
  return (
    <main className="w-[95%] md:w-[90%] lg:w-full">
      {/** Project title and description div*/}
      <div className=" cursor-pointer lg:pl-3 py-[4px] pro" onClick={handleClick}>
        {/** Project title heading*/}
        <h2 className="text-[0.875rem] text-[#fff] montserrat md:text-[1.25rem] style font-bold leading-[120%] capitalize">
          {title}
        </h2>
        {/** Project description text*/}
        <p className="Poppins prety exclude cursor-pointer my-[0.44rem] text-[0.625rem] text-[#fff] md:text-[1rem] style font-normal leading-[120%] capitalize w-[15.375rem] sm:w-[17rem] md:w-[25.6875rem] md:h-[3.8125rem]">
          {description}
        </p>
      </div>
      {/** More details and live view buttons*/}
      <div className="flex gap-[1.36rem] sm:gap-[2rem] md:gap-[2rem]">
        <Button
          variant="link"
          className="more Poppins text-[0.625rem] md:text-[0.875rem] hover:no-underline style font-bold leading-[120%]"
        >
          More Details
        </Button>
        <Button
          onClick={handleRoute}
          variant="link"
          className="border-b-2 text-[#fff] flex justify-center gap-4 py-[0.65rem] px-[0.5rem] rounded-none md:py-[1rem] text-[0.76019rem] md:text-[1rem] capitalize leading-[120%] md:px-[1.5rem] style hover:no-underline"
        >
          Live view <GoLive />
        </Button>
      </div>
    </main>
  );
};
