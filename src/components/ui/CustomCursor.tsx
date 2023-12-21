// src/CustomCursor.js
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CursorProps {
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState<CursorProps>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleElementHover = () => {
      setIsHovered(true);
    };

    const handleElementLeave = () => {
      setIsHovered(false);
    };

    document.addEventListener('mousemove', updateCursorPosition);

    // Add event listeners for the elements you want to track
    const trackedElements = document.querySelectorAll('p, h1, span');

    trackedElements.forEach((element) => {
      element.addEventListener('mouseenter', handleElementHover);
      element.addEventListener('mouseleave', handleElementLeave);
      element.classList.add('cursor-text');
    });

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);

      // Remove event listeners when the component unmounts
      trackedElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleElementHover);
        element.removeEventListener('mouseleave', handleElementLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: isHovered ? 6 : 1 }}
      exit={{ opacity: 0, scale: 0.2 }}
      transition={{ duration: 0.3 }}
      style={{ left: `${position.x}px`, top: `${position.y}px`, color: `${isHovered? '#ff0000' : '#ff0000'}` }}
    >
      {/* You can customize the cursor content here */}
    </motion.div>
  );
};

export default CustomCursor;
