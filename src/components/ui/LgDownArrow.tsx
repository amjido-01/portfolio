import { SVGProps } from "react"
import { motion } from "framer-motion"
export const LgDownArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <circle cx={32} cy={32} r={31} stroke="#fff" strokeWidth={2} />
   <motion.g
    initial={{ y: 0 }}
      animate={{ y: [ -16, 16, -16] }} // Bouncing animation along the y-axis
      transition={{
        duration: 5,
        stiffness: 50,
        delay: 8,
        type: "keyframes",
        repeat: Infinity,
        ease: "easeInOut",
      }}
   >
     <path
      fill="#fff"
      d="M31.293 39.707a1 1 0 0 0 1.414 0l6.364-6.364a1 1 0 0 0-1.414-1.414L32 37.586l-5.657-5.657a1 1 0 0 0-1.414 1.414l6.364 6.364ZM31 24v15h2V24h-2Z"
    />
   </motion.g>
  </svg>
)