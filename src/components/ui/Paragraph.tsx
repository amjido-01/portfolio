import React from 'react';
import { useRef } from 'react';
import {motion, useScroll } from 'framer-motion';

type paragraphProps = {
    value: string;
}
export const Paragraph: React.FunctionComponent<paragraphProps> = ({value}) => {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
  target: element,
  offset: ["start 0.9", "start start"]
})


  return (
    <motion.p className='border-2 mx-auto md:mx-0 w-full px-5 md:w-[90%] text-[#ccc] text-[0.875rem] md:text-[1.25rem] font-normal'
    ref={element}
    style={{opacity: scrollYProgress}}
    >{value}</motion.p>
  )
}
