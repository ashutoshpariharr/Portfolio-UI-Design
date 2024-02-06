import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Magnetic from "../components/social/Magnetic";

const Footer = () => {
  return (
    <div>
      {/* SVG Border */}

      <div className="custom-shape-divider-top-1706979512">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="footer-container">
        <div className="footer-img" style={{ display: "inline-block" }}>
          <div className="footer-right">
            <img
              src="https://ashutosh-portfolio.onrender.com/imgs/Second.jpg"
              loading="lazy"
              alt="img logo"
              style={{ display: "inline-block", borderRadius: "50%" }}
            />
            <h1 style={{ display: "inline-block" }}>Let's work,</h1>
            <h1>Together</h1>
          </div>
          <div className="footer-left">
            <FaArrowLeftLong />
          </div>
        </div>
        <hr className="footer-hr" />
        <div className="footer-child3">
          <div className="footer-btn">
            <button className="middleText-btn">
              ashutoshparihar51@gmail.com
            </button>
            <button className="middleText-btn">+917248099165</button>
          </div>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Magnetic>
              <div className="circle">
                <Magnetic>Get In Touch</Magnetic>
              </div>
            </Magnetic>
          </Link>
        </div>
      </div>
      <div className="footer-below">
        <div className="below-text">
          <p>VIRSION</p>
          <br />
          <span>2023 @Edition</span>
        </div>
        <div className="below-text">
          <p>LOCAL TIME</p> <br />
          <span>6am/mumbai</span>
        </div>

        <div className="below-text">
          <p>SOCIAL</p>
          <div className="footer-icons">
            <a
              href="https://www.instagram.com/ashutosh_parihar___/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Magnetic>
                <span style={{ fontSize: "15px" }} id="navaa">
                  Instagram
                </span>
              </Magnetic>
            </a>
            <a
              href="https://www.linkedin.com/in/ashutosh-parihar-110916281/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Magnetic>
                <span style={{ fontSize: "15px" }} id="navaa">
                  LinkedIn
                </span>
              </Magnetic>
            </a>

            <a
              href="https://www.facebook.com/ab.devilear.10"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <Magnetic>
                <span style={{ fontSize: "15px" }} id="navaa">
                  Facebook
                </span>
              </Magnetic>
            </a>
            <a
              href="https://web.telegram.org/a/"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <Magnetic>
                <span style={{ fontSize: "15px" }} id="navaa">
                  Teligram
                </span>
              </Magnetic>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
