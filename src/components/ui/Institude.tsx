import React from 'react';

type institudeProps = { 
    image: string;
}

export const Institude: React.FunctionComponent<institudeProps> = ({image}) => {
  return (
    <img src={image} alt="" className='pl-[2.39056rem] md:pl-[4rem] h-[1.875rem] md:h-[3.125rem]' />
  )
}
