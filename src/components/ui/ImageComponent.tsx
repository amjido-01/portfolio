/**
 * ImageComponent renders an image with a blurhash placeholder.
 * It takes in props for the image source, alt text, dimensions and blurhash.
 * It uses useState and useEffect to track image load state.
 * While loading, it shows the blurhash. Once loaded, it displays the image.
 */
import React from "react";
import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
type imgProps = {
  src: string;
  alt: string;
  hash: string;
};
export const ImageComponent: React.FunctionComponent<imgProps> = ({
  src,
  alt,
  hash,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);
  return (
    <>
      <div
        style={{
          display: imageLoaded ? "none" : "inline",
          width: "100%",
          height: "100%",
          borderRadius: "1.5rem",
        }}
        className="w-full h-full"
      >
        <Blurhash
          className="w-full h-full object-cover rounded-[1.5rem]"
          hash={hash}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
          style={{ borderRadius: "1.5rem" }}
        />
      </div>

      <img
        loading="lazy"
        className="w-full h-full object-cover rounded-[1.5rem]"
        src={src}
        alt={alt}
        style={{
          display: !imageLoaded ? "none" : "block",
          borderRadius: "1.5rem",
        }}
      />
    </>
  );
};
