import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Curousel from "../components/curousel/Curousel";

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
          <div className="multylayer"></div>
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

      {/* Costomer satisfact text */}

      <div className="constomer-satisfaction">
        <div className="cos-1">
          <h2>Costomer Satisfaction</h2>
        </div>
        <div className="cos-2">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus eum
            in doloremque corporis asperiores commodi numquam dolorem, nam ab
            tenetur sequi sint, consectetur facere hic ad voluptas quae est,
            quos voluptate autem nihil! Numquam harum tempore eos eligendi? Ab
            eveniet doloremque quos alias incidunt nesciunt molestias odit
            quidem, sint labore numquam consequuntur. Incidunt sint perspiciatis
            unde recusandae esse porro commodi facere, magni optio, enim
            obcaecati tempore expedita! Quibusdam, suscipit ipsa.
          </p>
        </div>
      </div>

      <div className="crousel">
        <Curousel />
      </div>

      {/* <div className="text-shadow"></div> */}
      {/* <div className="hero">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              tenetur,
              <br /> eos tempora, excepturi qui quidem soluta, nesciunt sit
              illum temporibus voluptatibus distinctio. Est nihil necessitatibus
              facere illo molestiae fuga unde!
            </p>
          </div>
        </div>
       
      </div> */}

      {/* Third section for cv and more */}

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
    </div>
  );
};

export default Home;
