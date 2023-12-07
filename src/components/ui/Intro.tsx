import React from 'react';

export const Intro: React.FunctionComponent = () => {
  return (
    <div className="mx-auto text-[#fff]">
          <div className='relative w-[20rem] sm:w-[30rem] border2  md:w-[48.625rem] bord md:h-[7.8125rem] mx-auto uppercase'>
            
              <h1 className='intro text-[2rem] md:text-[3.25rem] leading-[120%] textcenter md:text-start'>Transforming Ideas <span className='sm:hidden intro'>into Digital</span></h1>

            <div className='spin-text-container flex justify-start smgap-1 md:justify-center md:w-[48.2rem] border2 border2 h-[30px] md:h-[60px] intro text-[2rem] md:text-[3.25rem] leading-[120%]'>

              <h1 className='intro textcenter md:text-start hidden sm:block'>into Digital</h1>
              <div className='word text-start'>
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
