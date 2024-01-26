import { useState } from "react";
import "./AnimationNav.css";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";

const AnimationNav = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const handleActive = () => {};

  return (
    <>
      <div className="button" onClick={toggleActive}>
        <div
          className={`burger ${isActive ? "burgerActive" : ""}`}
          onClick={handleActive}
        ></div>
      </div>

      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default AnimationNav;
