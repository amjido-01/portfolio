import React from 'react';
import { useRef } from 'react';
import {motion, useScroll, useTransform } from 'framer-motion';

type wordProps = {
    value: string;
}
export const Word: React.FunctionComponent<wordProps> = ({value}) => {

    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start end", "start start"]
    })

    const kalma = value.split(" ");

  return (
    <h1
     className='flex flex-wrap items-center montserrat text-[#fff] text-[1.5rem] md:text-[2.25rem] font-bold style'
    ref={element}
    >{
        kalma.map((kalmae, index) => {
            const start = index / kalma.length;
            const end = start + (1 / kalma.length);
            console.log([start, end]);
            
            return <Words key={index} range={[start, end]} progress={scrollYProgress}>{kalmae}</Words>
        })
    }</h1>
  )
}

type WordsProps = {
    children: React.ReactNode;
    range: [number, number];
    progress: any; // Replace 'any' with the specific type for progress if available
}

const Words: React.FunctionComponent<WordsProps> = ({children, range, progress}) => {
    const opacity = useTransform(progress, range, [0,1])
    return (
        <span className='relative mr-[6px]'>
            <span className=' absolute opacity-[0.1]'>{children}</span>
            <motion.span  
        style={{opacity: opacity}}
        className=''>{children}</motion.span>
        </span>
        
    )
}