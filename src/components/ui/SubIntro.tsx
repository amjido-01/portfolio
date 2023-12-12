import React from 'react';
import { motion } from  "framer-motion"

export const SubIntro: React.FunctionComponent = () => {
  return (
    <div className='w-[20.125rem] md:mx-auto md:w-[48.375rem] lg:w-[48rem]'>
      <motion.p 
          initial={{ x: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
      className="text-cente border2 w-[95%] md:w-[87%] lg:w-full text-[0.875rem] mt-[0.56rem] md:mt-[rem] lg:mt-[0.87rem] text-[#ccc] md:text-[1.5rem] sub-intro leading-[120%] normal-case"> Frontend magic, from your vision to reality, witness the  power of turning concepts into captivating  user-centric design.</motion.p>
    </div>
  )
}
