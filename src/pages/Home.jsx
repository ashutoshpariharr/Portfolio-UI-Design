import { IoIosArrowRoundForward } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import animationdata from "../assets/lottie/team.json";
import animationdata1 from "../assets/lottie/alone-work.json";
import Footer from "../pages/Footer";
import { HoverImageLinks } from "../components/hero/HoverImageLinks";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="home-content">
          <p>UI/UX DESIGNER, DEVELOPER</p>
          <h1>
            I'M, <br />
            ASHUTOSH
          </h1>
          <div className="home-btn">
            <Link to="/about">
              <button className="btn-1">
                More About Me{" "}
                <span>
                  <IoIosArrowRoundForward width={200} />
                </span>
              </button>
            </Link>
            <Link to="/contact">
              <button className="Home-button">
                <span>Hire Me</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="home-bg">
          <Lottie animationData={animationdata} />
        </div>
      </div>

      {/* This is marque text flow  */}

      <div className="infinity-text-container">
        <div className="infinity-text">
          <p>
            Hi there! 👋 I'm Ashutosh, a passionate MERN Stack Developer
            striving for excellence in the 🌐 world of web development. 🚀 I
            bring creativity, 💡 problem-solving skills, and a keen eye for
            detail to every project.
          </p>
        </div>
      </div>

      <HoverImageLinks />

      <div className="crousel-btn">
        <NavLink to="/service" style={{ textDecoration: "none" }}>
          <button className="banner-btn">
            <span>View More</span>
          </button>
        </NavLink>
      </div>

      <div className="custom-shape-divider-bottom-1706285365">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div
        className="hight"
        style={{
          backgroundColor: "#F9BCAC",
          marginTop: "18rem",
        }}
      >
        <div className="middle-text">
          <h3 style={{ padding: "5rem" }}>
            Crafting Digital Excellence: MERN Stack Maestro and Visionary
            Frontend Developer, Turning Ideas into Seamless Experiences
          </h3>
          <p>
            Embrace a world where innovation meets proficiency. As a Full Stack
            Developer, I weave magic through MERN technologies, sculpting
            dynamic websites with precision. My commitment to code craftsmanship
            extends from robust backend architecture to captivating user
            interfaces. Let's embark on a journey of transformative digital
            solutions. Your vision, my expertise Together, we redefine the
            digital landscape
          </p>
          <div className="middleBtn">
            <Link to="/contact">
              <button className="middleText-btn">Get In Touch</button>
            </Link>
          </div>
        </div>

        <div className="hero">
          <div className="left-hero">
            <div className="waviy" style={{ marginLeft: "140px" }}>
              <span style={{ "--i": 1 }}>R</span>
              <span style={{ "--i": 2 }}>E</span>
              <span style={{ "--i": 3 }}>S</span>
              <span style={{ "--i": 4 }}>U</span>
              <span style={{ "--i": 5 }}>M</span>
              <span style={{ "--i": 6 }}>E</span>
            </div>
            <br />
            <div className="absolute-text">
              <p>
                Unlock the gateway to my professional journey! This carefully
                curated document encapsulates my skills, experiences, and
                passion for the MERN stack. Dive into a world where innovation
                meets efficiency, and let my journey on the MERN expressway
                inspire your next venture. Click the button below to embark on a
                visual voyage through my career highlights, technical prowess,
                and unwavering commitment to excellence.
              </p>
            </div>
            <center>
              <h1 style={{ marginTop: "2rem" }}>Get My Resume</h1>
              <br />

              <div className="button-cv" data-tooltip="Size: 803Kb">
                <div className="button-wrapper-cv">
                  <div className="text-cv">Download</div>
                  <span className="icon-cv">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="2em"
                      height="2em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </center>
          </div>
          <div className="right-hero">
            <Lottie animationData={animationdata1} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
