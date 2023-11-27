import React, { useEffect, useRef } from 'react';
import {gsap} from 'gsap';

interface ScrambleTextProps {
  initialText: string;
  finalText: string;
  duration: number;
  delay: number;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ initialText, finalText, duration, delay }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        duration,
        delay,
        scrambleText: { text: finalText, rightToLeft: true, chars: 'lowercase' },
      });
    }
  }, [delay, duration, finalText]);

  return <div ref={textRef}>{initialText}</div>;
};

export default ScrambleText;
