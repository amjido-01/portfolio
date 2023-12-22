import React from 'react'
import Marquee from "react-fast-marquee";
import { Institude } from './Institude';

type OrganizationsProps = {
    direction: "left" | "right" | "up" | "down";
    logos: string[];
}
export const Organizations: React.FunctionComponent<OrganizationsProps> =({direction, logos}) => {
  return (
    <div>
        <div>
            <Marquee direction={direction} pauseOnHover={true} speed={30}>
            {logos.map((logo,index) => (
                <Institude key={index} image={logo} />
            ))}
        </Marquee>
        </div>
    </div>
  )
}
