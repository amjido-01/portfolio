import React from 'react';

export const Intro: React.FunctionComponent = () => {
  return (
    <div className="mx-auto text-[#fff]">
          <div className='relative w-[24rem] md:w-[48.625rem] bord md:h-[7.8125rem] mx-auto'>
            
              <h1 className='intro borde text-[2rem] md:text-[3.25rem] leading-[120%] uppercase text-start'>Transforming Ideas <span className='md:hidden'>nto Digital</span></h1>

            <div className='spin-text-container flex flex-co w-[49rem] border-2 h-[30px] md:h-[60px] intro text-[2rem] md:text-[3.25rem] leading-[120%] uppercase '>

              <h1 className='intro text-start border border-red-500 hidden md:block'>into Digital</h1>
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
