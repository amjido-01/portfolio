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
    content: string
  }
}

export const Card: React.FunctionComponent<CardProps> = ({card}) => {
   const isFirstCard = card.id === 1;
  // Render the card component
  return (
    <main
      key={card.id}
      className={` ${isFirstCard ? 'bg-transparent w-[12rem] md:w-[34.25rem] md:h-[25rem]' : "bg-[#0F172D] border-2  w-[23.9375rem] h-[17.47263rem] md:h-[25rem] md:w-[34.25rem] "} relative rounded-[1.5rem] overflow-hidden
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
        <div className="absolute flex h-full gap-[4.56rem]">
          <div className="aside w-[18rem] border-2 h-full bullet">
            <img
              src={card?.pic}
              alt="testimony pic"
              className="absolute md:w-[6.28488rem] h-[6.28488rem] object-cover left-4 z-10"
            />
          </div>

          <div className="content p-[3.23rm]">
            <div>
              <h3 className="text-[#fff]">{card?.name}</h3>
              <p className="text-[#CCCCCC]">product designer</p>
            </div>

            <div className="body">
              <p>{card.content}</p>
            </div>
          </div>
        </div>
      )}
     
      
    </main>
  );
}
