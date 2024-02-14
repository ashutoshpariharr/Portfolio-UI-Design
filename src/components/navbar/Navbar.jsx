import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth";
import Magnetic from "../social/Magnetic";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export const Navbar = () => {
  const varint = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5, // Delay before children start animating
        staggerDirection: 1, // Reverse order
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const { isLoggedIn } = useAuth();
  return (
    <div>
      <header>
        <div className="containerr">
          {/* <div className="logo">
            <a href="/">
              <img src="/images/logo.png" alt="this is header logo" />
            </a>
          </div> */}

          <nav>
            <motion.ul
              className="remove-li"
              variants={varint}
              initial="hidden"
              animate="show"
            >
              <motion.li variants={item}>
                <Magnetic>
                  <NavLink
                    id="navaa"
                    to="/"
                    style={({ isActive }) => ({
                      color: isActive ? "#007bff" : "black",
                    })}
                  >
                    Home
                  </NavLink>
                </Magnetic>
              </motion.li>

              <motion.li variants={item}>
                <Magnetic>
                  <NavLink
                    id="navaa"
                    to="/about"
                    style={({ isActive }) => ({
                      color: isActive ? "#007bff" : "black",
                    })}
                  >
                    About
                  </NavLink>
                </Magnetic>
              </motion.li>

              <motion.li variants={item}>
                <Magnetic>
                  <NavLink
                    id="navaa"
                    to="/service"
                    style={({ isActive }) => ({
                      color: isActive ? "#007bff" : "black",
                    })}
                  >
                    Projects
                  </NavLink>
                </Magnetic>
              </motion.li>

              <motion.li variants={item}>
                <Magnetic>
                  <NavLink
                    id="navaa"
                    to="/contact"
                    style={({ isActive }) => ({
                      color: isActive ? "#007bff" : "black",
                    })}
                  >
                    Contact
                  </NavLink>
                </Magnetic>
              </motion.li>
              {isLoggedIn ? (
                <motion.li variants={item}>
                  <Magnetic>
                    <NavLink
                      id="navaa"
                      to="/logout"
                      style={({ isActive }) => ({
                        color: isActive ? "#007bff" : "black",
                      })}
                    >
                      Logout
                      <IoIosArrowDown />
                    </NavLink>
                  </Magnetic>
                </motion.li>
              ) : (
                <>
                  <motion.li variants={item}>
                    <Magnetic>
                      <NavLink
                        id="navaa"
                        to="/login"
                        style={({ isActive }) => ({
                          color: isActive ? "#007bff" : "black",
                        })}
                      >
                        Login
                      </NavLink>
                    </Magnetic>
                  </motion.li>
                  <motion.li variants={item}>
                    <Magnetic>
                      <NavLink
                        id="navaa"
                        to="/register"
                        style={({ isActive }) => ({
                          color: isActive ? "#007bff" : "black",
                        })}
                      >
                        Register
                      </NavLink>
                    </Magnetic>
                  </motion.li>
                </>
              )}
            </motion.ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
