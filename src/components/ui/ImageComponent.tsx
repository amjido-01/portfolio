import React from 'react';
import { useState, useEffect } from 'react';
import { Blurhash } from "react-blurhash";
type imgProps = {
  src: string
  alt: string
  imageWidth: string
  imageHeight: string
  hash: string
}
export const ImageComponent: React.FunctionComponent<imgProps> = ({src, alt, imageWidth, imageHeight, hash}) => {
 const [imageLoaded, setImageLoaded] = useState(false);

 useEffect(() => {
  const img = new Image();
  img.onload = () => {
    setImageLoaded(true)
  }
  img.src = src
 }, [src])
  return (
    <>
     <div style={{display: imageLoaded ? "none" : "inline", width: '100%', height: '100%', borderRadius: '1.5rem' }}>
       <Blurhash 
        className='w-full h-full object-cover rounded-[1.5rem]'
        hash={hash}
        width={imageWidth}
        height={imageHeight}
        resolutionX={32}
        resolutionY={32}
        punch={1}
        style={{borderRadius: "1.5rem"}}
      />
     </div>

     <img
     loading='lazy'
     className='w-full h-full object-cover rounded-[1.5rem]'
      src={src} 
      alt={alt} 
      style={{display : !imageLoaded ? "none" : "inline", width: '100%', height: '100%', borderRadius: "1.5rem"}}
   />
    </>
  )
}
