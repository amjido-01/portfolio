/**
 * Card component renders a card with background image, title and hover effect.
 * It takes a card object with id, url and title properties.
 * Renders a main div with background image, title text and zoom in transition on hover.
*/
import React from "react";
// the props interface for the Card component
interface CardProps {
  card: {
    id: number;
    title: string;
     pic: string;
     name: string;
    alt: string;
    role: string;
    content: string
  }
}

export const Card: React.FunctionComponent<CardProps> = ({card}) => {
   const isFirstCard = card.id === 1;
  // Render the card component
  return (
    <main
      key={card.id}
      className={` ${isFirstCard ? 'bg-transparent w-[12rem] md:w-[28rem] md:h-[25rem]' : "bg-[#0F172D] w-[23.9375rem] h-[17.47263rem] md:h-[25rem] md:w-[34.25rem] "} relative rounded-[1.5rem] overflow-hidden
  `}>
      {isFirstCard ? (
        <div className="absolute flex items-center w-full h-full md:h-full md:w-full">
          <div className=" md:ml-16">
            <h1 className="montserrat text-[#fff] text-[1.5rem] md:text-[3rem] font-black leading-normal capitalize my-[1.38rem] md:my-[4rem]">
              clients <br /> testimonials
            </h1>
          </div>
        </div>
      ) : (
        <div className="absolute flex h-full gap-[3rem] md:gap-[4.56rem]">
          <div className="aside w-[4rem] h-full bullet">
            <img
              src={card?.pic}
              alt="testimony pic"
              className="absolute md:w-[6.28488rem] h-[6.28488rem] top-[1.22rem] left-[0.66rem] md:top-[1.75rem] md:left-[0.88rem] z-10"
            />
          </div>

          <div className="content p-[3.23rm]">
            <div className="mt-[3rem] md:mt-[3rem] mb-[1.94rem] md:mb-[2.75rem]">
              <h3 className="text-[#fff] montserrat text-[1.04838rem] md:text-[1.5rem] font-bold leading-normal capitalize">{card?.name}</h3>
              <p className="text-[#CCCCCC] montserrat text-[0.69888rem] md:text-[1rem ] style font-normal capitalize">{card?.role}</p>
            </div>

            <div className="body w-[15.69475rem] md:w-[22.45619rem]">
              <p className="text-[#fff] poppins text-[0.78625rem] md:text-[1.125rem] style font-normal leading-[160%] capitalize">{card.content}</p>
            </div>
          </div>
        </div>
      )}
     
      
    </main>
  );
}
