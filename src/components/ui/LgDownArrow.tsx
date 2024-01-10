import { SVGProps } from "react";
import { motion } from "framer-motion";

export const LgDownArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 80 80" {...props}>
    {/* SVG circle with a rounded border */}
    <circle cx={40} cy={40} r={40} stroke="#fff" strokeWidth={2} className='border-2 border-red-500' />

    {/* Motion group for the bouncing arrow */}
    <motion.g
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{
        duration: 5,
        stiffness: 50,
        delay: 8,
        type: "keyframes",
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="flex justify-center items-center"
      style={{ width: "100%", height: "100%" }}
    >
      {/* Path for the arrow */}
      <path
        className='border-2 border-red-500'
        fill="#fff"
        d="M31.293 39.707a1 1 0 0 0 1.414 0l6.364-6.364a1 1 0 0 0-1.414-1.414L32 37.586l-5.657-5.657a1 1 0 0 0-1.414 1.414l6.364 6.364ZM31 24v15h2V24h-2Z"
        transform="translate(0, 12)"
      />
    </motion.g>
  </svg>
);
