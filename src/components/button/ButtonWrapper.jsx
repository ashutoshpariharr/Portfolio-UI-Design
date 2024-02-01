import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import './Button.css';

const ButtonWrapper = () => {
  return (
    <SpotlightButton />
  );
};

const SpotlightButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    // Check if btnRef.current is not null before adding event listeners
    if (btnRef.current) {
      btnRef.current.addEventListener("mousemove", handleMouseMove);
      btnRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup function
    return () => {
      // Check if btnRef.current is not null before removing event listeners
      if (btnRef.current) {
        btnRef.current.removeEventListener("mousemove", handleMouseMove);
        btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []); // Dependency array is empty to run this effect only once

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="spotlight-button"
    >
      <span className="spotlight-text">
        Register Now
      </span>
      <span
        ref={spanRef}
        className="spotlight"
      />
    </motion.button>
  );
};

export default ButtonWrapper;
