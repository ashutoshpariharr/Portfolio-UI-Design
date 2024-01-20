import { FaInstagram } from "react-icons/fa";

const Home = () => {
  const testimonialStyle = {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "50%", // Make it round
    maxWidth: "300px", // Set a max width for better readability
    margin: "20px auto", // Center the testimonial
    textAlign: "center", // Center text
  };
  return (
    <div>
      <div className="container">
        <div className="home-content">
          <p>MERN Stack Developer</p>
          <h1>This is Ashutosh</h1>
        </div>
        <div className="home-bg">
          <div className="multylayer"></div>
        </div>
      </div>

      {/* This is marque text flow  */}

      <div className="infinity-text-container">
        <div className="infinity-text">
          <h2>
            Your testimonial text goes here. It can be as long as you want, and
            it will scroll infinitely from right to left.
          </h2>
          {/* Repeat the content if needed */}
        </div>
      </div>

      <div className="text-shadow"></div>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              tenetur,
              <br /> eos tempora, excepturi qui quidem soluta, nesciunt sit
              illum temporibus voluptatibus distinctio. Est nihil necessitatibus
              facere illo molestiae fuga unde!
            </p>
          </div>
          <div className="icons">
            <svg className="instagram-icon">
              <FaInstagram />
            </svg>
          </div>
        </div>
        <div className="right-hero">
          <img src="/images/home.webp" alt="home img" />
        </div>
      </div>

      {/* Third section for cv and more */}

      <div className="container">
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
      </div>

      <div style={testimonialStyle}>
        <p>
          "Your testimonial text goes here. It can be as long as you want, and
          it will automatically wrap around in a circular shape."
        </p>
        <p>- Testimonial Author</p>
      </div>
    </div>
  );
};

export default Home;
