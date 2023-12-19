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
  alt: string;
  content: string
  }
}

export const Card: React.FunctionComponent<CardProps> = ({card}) => {
  // Render the card component
  return (
    <main
      key={card.id}
      className={` ${card.pic ? 'bg-[#0F172D]' : "bg-transparent"} group relative rounded-[1.5rem] w-[23.9375rem] h-[17.47263rem] md:h-[25rem] md:w-[34.25rem] overflow-hidden
  `}>
      {/* Render the background image */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      {card.pic ?  <div className="absolute flex h-full border-2 gap-[4.56rem]">
       <div className="aside w-[18rem] h-full bullet">
         <img src={card.pic} alt={card.alt} className='absolute md:w-[6.28488rem] h-[6.28488rem] object-cover left-4 z-10'/>
       </div>
       
       <div className="content p-[3.23rm] border-2">
          <div>
           <h3 className="text-[#fff]">{card.name}</h3>
            <p className="text-[#CCCCCC]">product designer</p>
          </div>
          
          <div className="body">
            <p>
            {card.content}
            </p>
          </div>
       </div>
       
      </div>: <div className="absolute flex justify-center items-center w-full h-full">
        <div className="">
          <h1 className="montserrat text-[#fff] text-[1.5rem] md:text-[2.25rem] font-black leading-normal capitalize my-[1.38rem] md:my-[4rem]">
          clients <br /> testimonials
        </h1>
        </div>
      </div> }
     
      
    </main>
  );
}
