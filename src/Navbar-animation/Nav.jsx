import "./AnimationNav.css";

import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "./anim";
// import { Link } from "react-router-dom";
import Jodd from "./Jodd";
// import { Link } from "react-router-dom";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Service",
    href: "/service",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Login",
    href: "/login",
  },
  {
    title: "Register",
    href: "/register",
  },
];

function Nav() {
  const pathname = usePathname();

  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  return (
    <div>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="menu"
      >
        <div className="body">
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className="nav"
          >
            <div className="header-nav">
              <p>Navigation</p>
            </div>

            {navItems.map((data, index) => {
              return (
                <Jodd
                  key={index}
                  data={{ ...data, index }}
                  isActive={selectedIndicator == data.href}
                  setSelectedIndicator={setSelectedIndicator}
                ></Jodd>
              );
            })}
          </div>

          <div className="nav-footer">
            <a
              href="https://www.linkedin.com/in/ashutosh-parihar-110916281/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/ashutosh_parihar___/"
              target="_blank"
            >
              Instagram
            </a>
            <a href="https://github.com/ashutoshpariharr" target="_blank">
              GitHub
            </a>
            <a href="https://twitter.com/Ashutos19713007" target="_blank">
              Twitter
            </a>
          </div>
        </div>
      </motion.div>
    </div>
    // </div>
  );
}

export default Nav;
