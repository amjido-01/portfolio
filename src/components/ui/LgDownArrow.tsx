import { SVGProps } from "react";
import { motion } from "framer-motion";

export const LgDownArrow = (props: SVGProps<SVGSVGElement>) => {
    const cx = 40; // Set the desired center x-coordinate of the circle
  const cy = 40; // Set the desired center y-coordinate of the circle
  const r = 38;  // Set the desired radius of the circle
 return  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 80 80" {...props}>
    {/* SVG circle with a rounded border */}
    <circle cx={cx} cy={cy} r={r} stroke="#fff" strokeWidth={2} />

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
    >
      {/* Path for the arrow */}
      <path
        fill="#fff"
        d="M31.293 39.707a1 1 0 0 0 1.414 0l6.364-6.364a1 1 0 0 0-1.414-1.414L32 37.586l-5.657-5.657a1 1 0 0 0-1.414 1.414l6.364 6.364ZM31 24v15h2V24h-2Z"
         transform={`translate(${cx - 32}, ${cy - 40})`}
      />
    </motion.g>
  </svg>
};