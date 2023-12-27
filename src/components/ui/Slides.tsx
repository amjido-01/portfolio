import React from 'react'
import { Organizations } from '@/components/ui/Organizations';
import kust from '@/assets/kust.png';
import Arrow from '@/assets/Arrow.svg';
import ArrowSm from '@/assets/ArrowSm.svg';
import gdsc from '@/assets/gdsc.png';
import stem from '@/assets/stem.png';
import bench from '@/assets/bench.png';
import earewa from '@/assets/earewa.png';
import asibiti from '@/assets/asibiti.png';
import gdg from '@/assets/gdg.png';
import sauraro from '@/assets/Sauraro.png'
// import sauraro from '@/assets/sauraro.png'

const logos = [ 
    kust,
    gdsc,
    stem,
    bench,
    asibiti,
]
const logos2 = [
  earewa,
  asibiti,
  gdg,
  sauraro,
   gdsc,
]
export const Slides: React.FunctionComponent = () => {
  return (
    <div className='mt-[2.94rem] md:mt-[6.88rem] mb-24'>
       <div>
         <h1 className='text-[#fff] text-[1rem] font-black montserrat style capitalize text-center md:text-[1.5rem]'>institutes I've work with </h1>
        <img src={Arrow} alt="" className='mx-auto hidden md:block'/>
        <img src={ArrowSm} alt="" className='mx-auto block md:hidden'/>
       </div>
       <div className='mt-[2.68rem] md:mt-[4.5rem] flex flex-col gap-[2.61rem] md:gap-[4rem]'>
         <Organizations direction='right' logos={logos}/>
      <Organizations direction='left' logos={logos2}/>
       </div>
    </div>
  )
}
