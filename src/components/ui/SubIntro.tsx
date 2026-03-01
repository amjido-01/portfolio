import React from 'react';
import { motion } from  "framer-motion"

/**
 * SubIntro component - Renders an animated paragraph with motion effects.
 * Exports as a React functional component.
 */
export const SubIntro: React.FunctionComponent = () => {
  // render the paragraph component
  return (
    <div className="w-[20.125rem] md:mx-auto md:w-[48.375rem] lg:w-[48rem]">
      <motion.p
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="text-cente border2 w-[95%] md:w-[87%] lg:w-full text-[0.875rem] mt-[0.56rem] md:mt-[rem] lg:mt-[0.87rem] text-[#ccc] md:text-[1.5rem] sub-intro leading-[120%] normal-case"
      >
        {" "}
       I transform ideas into high-performing digital products that drive measurable growth by combining product strategy and frontend engineering to build scalable web experiences that perform and convert.
        {/* Frontend magic, from your vision to reality, witness the power of
        turning concepts into captivating user-centric design. */}
      </motion.p>
    </div>
  );
};
