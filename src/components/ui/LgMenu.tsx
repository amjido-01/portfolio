import { SVGProps } from "react"
import { motion } from "framer-motion";
import { useState } from "react"
export const LgMenu = (props: SVGProps<SVGSVGElement>) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHoverStart = () => {
      setIsHovered(true);
      console.log("start");
      
    };

    const handleHoverEnd = () => {
      setIsHovered(false);
      console.log("end");
    };

    console.log(isHovered);
    
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{cursor: "pointer"}}
    {...props}
  >
   <g id="Group">
   <motion.g
      // whileHover={{ rotate: [360, 0]}}
        whileHover={{ rotate: isHovered ? [180, 0] : 0, transition: { duration: 1 } }}
      whileTap={{ rotate: 0 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      transition={{ duration: 0.5 }}
      className=" fill-white hover:fill-[#348BF0]" 
   id="menu">
     <path id="Vector" d="M13.9507 16.7016C13.4283 16.7016 12.9273 16.8345 12.5579 17.0712C12.1885 17.3079 11.981 17.6289 11.981 17.9636C11.981 18.2983 12.1885 18.6192 12.5579 18.8559C12.9273 19.0926 13.4283 19.2255 13.9507 19.2255H29.7089C30.2313 19.2255 30.7323 19.0926 31.1017 18.8559C31.4711 18.6192 31.6786 18.2983 31.6786 17.9636C31.6786 17.6289 31.4711 17.3079 31.1017 17.0712C30.7323 16.8345 30.2313 16.7016 29.7089 16.7016H13.9507ZM13.9507 26.8404C13.4283 26.8404 12.9273 26.9733 12.5579 27.21C12.1885 27.4467 11.981 27.7677 11.981 28.1024C11.981 28.4371 12.1885 28.7581 12.5579 28.9947C12.9273 29.2314 13.4283 29.3644 13.9507 29.3644H29.7089C30.2313 29.3644 30.7323 29.2314 31.1017 28.9947C31.4711 28.7581 31.6786 28.4371 31.6786 28.1024C31.6786 27.7677 31.4711 27.4467 31.1017 27.21C30.7323 26.9733 30.2313 26.8404 29.7089 26.8404H13.9507Z"/>
   </motion.g>

   <g id="circle">
      <path id="Vector_2" fillRule="evenodd" clipRule="evenodd" d="M44 22.5C44 34.6506 34.1506 44.5 22 44.5C9.8494 44.5 0 34.6506 0 22.5C0 10.3494 9.8494 0.5 22 0.5C34.1506 0.5 44 10.3494 44 22.5ZM39.6 22.5C39.6 27.1678 37.7457 31.6444 34.4451 34.9451C31.1444 38.2457 26.6678 40.1 22 40.1C17.3322 40.1 12.8556 38.2457 9.55492 34.9451C6.25428 31.6444 4.4 27.1678 4.4 22.5C4.4 17.8322 6.25428 13.3556 9.55492 10.0549C12.8556 6.75428 17.3322 4.9 22 4.9C26.6678 4.9 31.1444 6.75428 34.4451 10.0549C37.7457 13.3556 39.6 17.8322 39.6 22.5Z" fill="white"/>
   </g>
  
  </g>
  </svg>
  )
}