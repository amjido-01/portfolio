/**
 * Word component that takes in a string value prop and splits it into individual words.
 * Renders the words wrapped in <Words> components that animate the opacity based on scroll position.
 * Exports the Word component.
 */
import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Word component props
type wordProps = {
  value: string;
};
// Word component
export const Word: React.FunctionComponent<wordProps> = ({ value }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.5", "start start"],
  });

  const texts = value.split(" ");

  return (
    <h1
      className="flex flex-wrap w-[90%] mx-auto md:mx-0 items-center montserrat text-[#fff] text-[1.5rem] md:text-[2.25rem] font-bold style"
      ref={element}
    >
      {texts.map((text, index) => {
        const start = index / texts.length;
        const end = start + 1 / texts.length;
        console.log([start, end]);

        return (
          <Words key={index} range={[start, end]} progress={scrollYProgress}>
            {text}
          </Words>
        );
      })}
    </h1>
  );
};

type WordsProps = {
  children: React.ReactNode;
  range: [number, number];
  progress: any; // Replace 'any' with the specific type for progress if available
};

const Words: React.FunctionComponent<WordsProps> = ({
  children,
  range,
  progress,
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-[6px]">
      <span className=" absolute opacity-[0.1]">{children}</span>
      <motion.span style={{ opacity: opacity }} className="">
        {children}
      </motion.span>
    </span>
  );
};
