import React from 'react'
import Marquee from "react-fast-marquee";
import { Institude } from './Institude';

type OrganizationsProps = {
    direction: string;
    logos: string[];
}
export const Organizations: React.FunctionComponent<OrganizationsProps> =({direction, logos}) => {
  return (
    <div className='border-2'>
        <Marquee direction={direction} className=''>
            {logos.map((logo,index) => (
                <Institude key={index} image={logo} />
            ))}
        </Marquee>
    </div>
  )
}
