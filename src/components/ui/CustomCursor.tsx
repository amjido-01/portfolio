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

    const trackedElements = document.querySelectorAll('p:not(.exclude), h1, h2, h3, span');
    // console.log(trackedElements);
    

    trackedElements.forEach((element) => {
      element.addEventListener('mouseenter', handleElementHover);
      element.addEventListener('mouseleave', handleElementLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
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
      animate={{ opacity: 1, scale: isHovered ? 5 : 1 }}
      exit={{ opacity: 0, scale: 0.2 }}
      transition={{ duration: 0.3 }}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundColor: isHovered ? '#f4f4f4' : '',
      }}
    >
      {/* You can customize the cursor content here */}
    </motion.div>
  );
};

export default CustomCursor;
