import React from 'react';

type institudeProps = { 
    image: string;
}

export const Institude: React.FunctionComponent<institudeProps> = ({image}) => {
  return (
    <img src={image} alt="" className='px-10' />
  )
}
