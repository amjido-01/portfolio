// TiltEffect.tsx
import React, { useRef, useState } from 'react';


interface TiltEffectProps {
  children: React.ReactNode;
}

export const TiltEffect: React.FunctionComponent<TiltEffectProps> = ({ children }) => {
  const tiltRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (tiltRef.current) {
      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight } = tiltRef.current;

      const xRotation = 20 * ((clientX - offsetWidth / 2) / offsetWidth);
      const yRotation = -20 * ((clientY - offsetHeight / 2) / offsetHeight);

      const scale = 1;

      const transformString = `perspective(500px) scale(${scale}) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      tiltRef.current.style.transform = transformString;
    }
  };

  const handleMouseOut = () => {
    if (tiltRef.current) {
      tiltRef.current.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
    }
  };

  const handleMouseDown = () => {
    setIsMouseDown(true);
    if (tiltRef.current) {
      tiltRef.current.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)';
    }
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    if (tiltRef.current) {
      tiltRef.current.style.transform = 'perspective(500px) scale(1.0) rotateX(0) rotateY(0)';
    }
  };

  return (
    <div
     className="tilt"
      ref={tiltRef}
      onMouseMove={handleMove}
      onMouseOut={handleMouseOut}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {children}
    </div>
  );
};