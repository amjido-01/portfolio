/**
 * Links component displays a link with animated hover effects.
 *
 * It takes in a handleRoute callback to handle routing on click,
 * a to prop for the link href, and children for the link text.
 *
 * It uses React motion and Framer Motion to create animated effects:
 * - Splitting the children text into spans and animating x offset on hover
 * - Tracking mouse position and animating an image based on position
 * - Animating arrow icon on hover
 */
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// Links component props type
type LinksProps = {
  handleRoute: React.MouseEventHandler<HTMLElement>;
  to: string;
  children: string;
};

// Links component
export const Links: React.FunctionComponent<LinksProps> = ({
  handleRoute,
  to,
  children,
}) => {
  // Motion values for mouse position and arrow icon position
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Spring values for mouse position and arrow icon position
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  // Transform mouse position and arrow icon position to CSS values
  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);
  // Handle mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    // Get the width and height of the link
    const width = rect.width;
    const height = rect.height;
    // Get the mouse position relative to the link
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    // Set the mouse position as a percentage of the link width and height
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
      // Set the mouse position as a spring value
    x.set(xPct);
    y.set(yPct);
  };
  // Return the links component
  return (
    <motion.a
      href={to}
      onClick={handleRoute}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative w-fit flex items-center justify-between transition-colors duration-500"
    >
      {/* Arrow icon */}
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block font-bold text-[#fff] style transition-colors duration-500 text-[2rem] md:text-[3rem]"
        >
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
      </div>
      {/* Arrow icon component */}
      <motion.div
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
      />
      {/* Arrow icon component */}
      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-1 md:p-4"
      >
        {/*
         * Arrow icon component
         *
         * It uses Framer Motion to animate the icon on hover
         *
         * The icon is positioned using absolute positioning and
         * transform: translate(-50%, -50%) to position the icon
         * in the center of the parent element
         */
        }
        <FiArrowRight className="text-[3rem] text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};
