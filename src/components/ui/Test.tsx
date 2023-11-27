// icon:star | Fontawesome https://fontawesome.com/ | Fontawesome
import * as React from "react";
import { motion } from "framer-motion"

type TestProps = React.SVGProps<SVGSVGElement> & {
  animationDuration?: number;
}
export function Test({ animationDuration = 5, ...props }: TestProps) {
  return (
    <svg
     viewBox="0 0 880 1000"
      fill="currentColor"
      {...props}
    >
        <motion.g
          initial={{ scale: 0.5, rotate: 0 }} 
   animate={{
      scale: [-0.5, 0.5, -0.5],
     rotate: [-360, 0, 360],
    }}
   transition={{
     duration: animationDuration,
     ease: "linear",
     times: [0, 0.5, 1], 
     repeat: Infinity,
    }}
        >
      <path d="M440 60l120 336h320L618 592l94 348-272-208-272 208 94-348L0 396h320L440 60" />

        </motion.g>
    </svg>
  );
}