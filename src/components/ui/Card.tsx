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
      className="group relative rounded-[1.5rem] h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      {/* Render the background image */}
      <div
        style={{
          background: `#0F172D`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute flex h-full border-2 gap-[4.56rem]">
        
       <div className="aside w-[18rem] h-full bullet">
           <img src={card.pic} alt={card.title} className='absolute md:w-[6.28488rem] h-[6.28488rem] object-cover left-4 z-10'/>
       </div>
       
       <div className="content p-[3.23rm] border-2">
          <div>
           <h3 className="text-[#fff]">Muhammad Niimatullahi</h3>
            <p className="text-[#CCCCCC]">product designer</p>
          </div>
          
          <div className="body">
            <p>
            “Lorem ipsum dolor sit amet consectetur. Fermentum convallis semper integer adipiscing adipiscing nibh eget. Posuere neque semper gravida massa cursus turpis vulputate. Mi maecenas.”
            </p>
          </div>
       </div>
       
      </div>
    </main>
  );
}
