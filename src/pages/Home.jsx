import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
// import Curousel from "../components/curousel/Curousel";

import Lottie from "lottie-react";
import animationdata from "../assets/lottie/working.json";
import Footer from "../pages/Footer";



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
              <button className="btn-2">
                Hire Me{" "}
                <span>
                  <IoIosArrowRoundForward />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="home-bg">
          {/* <div className="multylayer"></div> */}
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

     

      <div className="crousel-btn">
        {/* <button className="down-btn">VIEW MORE</button> */}
        <button className="banner-btn">
          <span>View More </span>
        </button>
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
            HERE IS THE BEST, <br /> DEVELOPER
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            ipsam placeat <br /> debitis provident animi ad tenetur, neque earum
            impedit architecto vitae eaque, <br /> ipsa molestiae adipisci,
            laborum non voluptas fugit error suscipit. Libero deleniti vitae
            commodi.
          </p>
          <div className="middleBtn">
            <button className="middleText-btn">Get In Touch</button>
          </div>
        <div className="text-shadow"></div>
        </div>

        <div className="hero">
          <div className="left-hero">
            <div className="waviy">
              <span style={{ "--i": 1 }}>M</span>
              <span style={{ "--i": 2 }}>E</span>
              <span style={{ "--i": 3 }}>R</span>
              <span style={{ "--i": 4 }}>N</span>
              <span style={{ "--i": 5 }}>-</span>
              <span style={{ "--i": 6 }}>S</span>
              <span style={{ "--i": 7 }}>T</span>
              <span style={{ "--i": 8 }}>A</span>
              <span style={{ "--i": 9 }}>C</span>
              <span style={{ "--i": 10 }}>K</span>
            </div>
            <br />
            <div className="absolute-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias tenetur,
                <br /> eos tempora, excepturi qui quidem soluta, nesciunt sit
                illum temporibus voluptatibus <br /> distinctio. Est nihil
                necessitatibus facere illo molestiae fuga unde!
              </p>
            </div>
          </div>
          <div className="right-hero">
            <Lottie animationData={animationdata} />
          </div>
        </div>
      </div>
      {/* Third section for cv and more */}

      <div className="w-full bg-slate-600"></div>

      {/* <div className="container">
        <div className="cv-right">
          <img src="images/homeFull.jpg" alt="This is for cv UI" />
        </div>
        <div className="cv-left">
          <h2>Something about me with your own oppenion</h2>
          <br />
          <div className="download-cv">
            <button className="cv-download">Resume</button>
          </div>
        </div>
      </div> */}

      {/* <div style={testimonialStyle}>
        <p>
          "Your testimonial text goes here. It can be as long as you want, and
          it will automatically wrap around in a circular shape."
        </p>
        <p>- Testimonial Author</p>
      </div> */}
       <Footer />
    </div>
  );
};

export default Home;
