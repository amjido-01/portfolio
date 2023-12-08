import React from 'react';
import { SubIntro } from './SubIntro';

export const Intro: React.FunctionComponent = () => {
  return (
    <div className="mx-auto text-[#fff] md:border2 border-red-500">
          <div className='relative w-[20rem] sm:w-[30rem] md:border2 md:w-[46.625rem] lg:w-[48rem] bord md:h-[7.8125rem] mx-auto uppercase'>
            
              <h1 className='intro text-[2rem] md:text-[3.25rem] leading-[120%] textcenter md:text-start'>Transforming Ideas <span className='lg:hidden intro'>into Digital</span></h1>

            <div className='spin-text-container flex justify-start border2 h-[30px] md:h-[60px] intro text-[2rem] md:text-[3.25rem] leading-[120%]'>

              <h1 className='intro textcenter md:text-start hidden lg:block'>into Digital</h1>
              <div className='word text-start border2'>
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
            <SubIntro />

          </div>
        </div>
  )
}
