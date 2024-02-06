import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth";
import Magnetic from "../social/Magnetic";

export const Navbar = () => {
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
            <ul className="remove-li">
              <li>
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
              </li>

              <li>
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
              </li>

              <li>
                <Magnetic>
                  <NavLink
                    id="navaa"
                    to="/service"
                    style={({ isActive }) => ({
                      color: isActive ? "#007bff" : "black",
                    })}
                  >
                    Service
                  </NavLink>
                </Magnetic>
              </li>

              <li>
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
              </li>
              {isLoggedIn ? (
                <li>
                  <Magnetic>
                    <NavLink
                      id="navaa"
                      to="/logout"
                      style={({ isActive }) => ({
                        color: isActive ? "#007bff" : "black",
                      })}
                    >
                      Logout
                    </NavLink>
                  </Magnetic>
                </li>
              ) : (
                <>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
