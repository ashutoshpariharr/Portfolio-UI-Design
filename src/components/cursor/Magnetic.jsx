import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

function Framer({ children }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = (clientX - (left + width / 2)) * 0.1;
    const middleY = (clientY - (top + height / 2)) * 0.1;
    setPosition((prevPosition) => ({
      x: prevPosition.x + middleX,
      y: prevPosition.y + middleY,
    }));
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: 'relative' }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 350, damping: 5, mass: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default Framer;
