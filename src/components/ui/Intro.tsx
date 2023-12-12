import React from 'react';
import { SubIntro } from './SubIntro';
import { motion } from 'framer-motion';

export const Intro: React.FunctionComponent = () => {
  return (
    <div className="mxauto text-[#fff]">
          <div className='relative w-[20rem] sm:w-[30rem] border2 md:w-[46.625rem] lg:w-[48rem] md:h-[11.8125rem] mx-auto uppercase'>
            
              <motion.h1 
               initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
              className='intro text-[2rem] md:text-[3.25rem] leading-[120%] textcenter md:text-start'>Transforming Ideas <span className='lg:hidden intro'>into Digital</span></motion.h1>

            <div className='spin-text-container flex justify-start border2 h-[30px] md:h-[60px] intro text-[2rem] md:text-[3.25rem] leading-[120%]'>

              <motion.h1 
               initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
              className='intro textcenter md:text-start hidden lg:block'>into Digital</motion.h1>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
              className='word text-start'>
                <span
            className='gradient-text'>Reality
            </span>
                <span 
            className='gradient-text'>Experience
            </span>

                <span 
            className='gradient-text'>Revolution
            </span>
                <span 
            className='gradient-text'>Excellence
            </span>
                <span 
            className='gradient-text'>Innovation
            </span>

              </motion.div>
            </div>

            <div>
            <SubIntro />
            </div>

          </div>
        </div>
  )
}
