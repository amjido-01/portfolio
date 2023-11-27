import React from "react";
import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export const Another: React.FC<IconProps> = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" 
  className="relative"
  width={56} height={54} fill="none" {...props}>
    {/* Icon 1 */}
    <path
      fill="#fff"
      d="M54.6 24.597 43.334 34.44 46.71 49.09a4.004 4.004 0 0 1-1.542 4.145 3.995 3.995 0 0 1-4.414.19l-12.77-7.75-12.74 7.75a3.995 3.995 0 0 1-5.81-2.03 4.003 4.003 0 0 1-.147-2.305l3.37-14.636-11.27-9.857a4 4 0 0 1 2.277-7.015l14.855-1.288 5.798-13.842A3.987 3.987 0 0 1 27.994 0a3.983 3.983 0 0 1 3.677 2.452l5.816 13.842 14.85 1.288a3.996 3.996 0 0 1 3.468 2.75 4.004 4.004 0 0 1-1.192 4.265h-.012Z"
    />
    <g
    className=" absolute -top-8 -left-4"
    >
    <path 
     className=" absolute -top-8 -left-4"
    d="M12.2046 12.8814...12.8814Z" fill="red"/>
    </g>
    
    {/* <g>
    <path d="M5.12323 2.36467...14.4361Z" fill="white"/>
    </g> */}

    {/* Icon 4 */}
    {/* Add the fourth path here */}

    {/* Icon 5 */}
    {/* Add the fifth path here */}

    {/* Icon 6 */}
    {/* Add the sixth path here */}
  </svg>
);