import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth";

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
                <NavLink
                  id="navaa"
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "greenyellow" : "black",
                  })}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  id="navaa"
                  to="/about"
                  style={({ isActive }) => ({
                    color: isActive ? "greenyellow" : "black",
                  })}
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  id="navaa"
                  to="/service"
                  style={({ isActive }) => ({
                    color: isActive ? "greenyellow" : "black",
                  })}
                >
                  Service
                </NavLink>
              </li>

              <li>
                <NavLink
                  id="navaa"
                  to="/contact"
                  style={({ isActive }) => ({
                    color: isActive ? "greenyellow" : "black",
                  })}
                >
                  Contact
                </NavLink>
              </li>
              {isLoggedIn ? (
                <li>
                  <NavLink
                    id="navaa"
                    to="/logout"
                    style={({ isActive }) => ({
                      color: isActive ? "greenyellow" : "black",
                    })}
                  >
                    Logout
                  </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink
                      id="navaa"
                      to="/login"
                      style={({ isActive }) => ({
                        color: isActive ? "greenyellow" : "black",
                      })}
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      id="navaa"
                      to="/register"
                      style={({ isActive }) => ({
                        color: isActive ? "greenyellow" : "black",
                      })}
                    >
                      Register
                    </NavLink>
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
