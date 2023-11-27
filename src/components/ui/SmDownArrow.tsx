import { SVGProps } from "react";
import { motion } from "framer-motion";
export const SmDownArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <circle cx={22} cy={22} r={21.313} stroke="#fff" strokeWidth={1.375} />
    <motion.g
    initial={{ y: 0 }}
      animate={{ y: [ -12, 12, -12] }} // Bouncing animation along the y-axis
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
      d="M21.514 27.299a.687.687 0 0 0 .972 0l4.375-4.376a.688.688 0 0 0-.972-.972L22 25.841l-3.89-3.89a.688.688 0 0 0-.971.972l4.375 4.376ZM21.313 16.5v10.313h1.375V16.5h-1.375Z"
    />
    </motion.g>

  </svg>
)