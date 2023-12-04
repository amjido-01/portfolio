import React from 'react';
import { Test } from './Test';

export const Intro: React.FunctionComponent = () => {
  return (
    <div className="text-center mx-auto text-[#fff]">
          <div className='relative w-[20rem] md:w-[46.375rem] md:h-[7.8125rem] mx-auto'>
            
            <div className='w-fit'>
              <div className=''>
                <Test animationDuration={8} className='absolute -top-[2rem] -left-12 md:-left-14 md:-top-[2.5rem] mx-auto w-[2rem] h-[2rem] md:w-[2.5rem] md:h-[2.5rem]'/>

              <Test animationDuration={5} className='absolute -top-[1rem] -left-10 md:-left-12 md:-top-[2rem] mx-auto w-[2.2rem] h-[2.2rem] md:w-[3.5rem] md:h-[3.5rem]'/>

              <Test animationDuration={4} className='absolute -left-8 -top-[2rem] md:-top-[2.5rem] mx-auto w-[1.5rem] h-[1.5rem]'/>
              </div>

               <Test animationDuration={7} className='absolute left-0 -top-6 md:-top-8 md:left-[1rem] w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem]'/>
                <Test animationDuration={4}  className='absolute -top-[2rem] -left-[1.4rem] md:-left-[1rem] md:-top-[2rem] w-[2.2rem] h-[2.2rem] md:w-[3rem] md:h-[3rem]'/>
              <Test animationDuration={10}  className='absolute borde -top-[1rem] -left-7 md:-top-5 md:-left-[1rem] w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem]'/>
            </div>

              <h1 className='intro borde text-center md:text-start md:pl-[2.5rem] text-[1.5rem] md:text-[3.25rem] leading-[120%] uppercase'>Transforming Ideas</h1>

            <div className='text-center spin-text-container h-[30px] md:h-[60px] intro text-[1.5rem] md:text-[3.25rem] leading-[120%] uppercase'>

              <h1 className=''>into Digital</h1>
              <div className='word  text-start'>
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

              </div>
            </div>

          </div>
        </div>
  )
}
