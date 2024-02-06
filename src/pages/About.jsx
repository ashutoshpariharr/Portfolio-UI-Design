import Lottie from "lottie-react";
import ProgressLine from "../components/progressBar/ProgressLine.jsx";
import { useAuth } from "../store/auth";
import animationdata from "../assets/lottie/working.json";

const About = () => {
  const { enter } = useAuth();

  return (
    <div>
     
      <div className="about-container">
        <div className="container">
          <div className="home-content">
            {/* <p>{`Hello ${enter.username}`}</p> */}
            <p>Welcome, {enter ? enter.username : "in over website."}</p>
            <h1>About Me,</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim hic{" "}
              <br /> eaque adipisci eveniet. Magni officiis itaque expedita
              recusandae <br /> repudiandae accusantium id neque cumque, nobis
              fugit dolore quidem <br /> sapiente illo. Iure recusandae
              molestiae odit nemo aspernatur!
            </span>
            <div className="home-btn"></div>
          </div>
          <div className="home-bg">
            <div className="multylayer"></div>
          </div>
        </div>

        {/* This is About section for Skills sections */}

        <div className="skill-container">
          <h1>I Can Help You With</h1>

          <div className="skill-cards">
            <div className="skill-item skill-card1">
              <span>01</span>
              <hr />
              <h1>Web Design</h1> <br />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                odit amet, corporis quis laboriosam sed id ut. Repellendus,
                excepturi. Repellat ipsum inventore alias nemo non ipsa fugiat
                dolorum. Enim, ex.
              </p>
            </div>

            <div className="skill-item skill-card2">
              <span>02</span>
              <hr />
              <h1>Web Development</h1> <br />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                odit amet, corporis quis laboriosam sed id ut. Repellendus,
                excepturi. Repellat ipsum inventore alias nemo non ipsa fugiat
                dolorum. Enim, ex.
              </p>
            </div>

            <div className="skill-item skill-card3">
              <span>03</span>
              <hr />
              <h1>MERN Development</h1>
              <br />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                odit amet, corporis quis laboriosam sed id ut. Repellendus,
                excepturi. Repellat ipsum inventore alias nemo non ipsa fugiat
                dolorum. Enim, ex.
              </p>
            </div>
          </div>
        </div>

        {/* Soft skills */}
        <div className="soft-skills">
          <div className="clas">
            <h1>Soft Skills</h1>
          </div>

          <ProgressLine label="Empty progressbar" />
          <ProgressLine
            label="Full progressbar"
            visualParts={[
              {
                percentage: "90%",
                color: "tan",
              },
            ]}
          />
          <ProgressLine
            label="One visual percentage - changed background"
            backgroundColor="lightblue"
            visualParts={[
              {
                percentage: "23%",
                color: "indianred",
              },
            ]}
          />
          <ProgressLine
            label="Two visual percentages"
            backgroundColor="lightgrey"
            visualParts={[
              {
                percentage: "53%",
                color: "steelblue",
              },
              {
                percentage: "13%",
                color: "deepskyblue",
              },
            ]}
          />
          <ProgressLine
            label="Multiple parts"
            visualParts={[
              {
                percentage: "13%",
                color: "lightsteelblue",
              },
              {
                percentage: "23%",
                color: "gold",
              },
              {
                percentage: "38%",
                color: "tomato",
              },
              {
                percentage: "13%",
                color: "lightpink",
              },
            ]}
          />
        </div>

        {/* Techniqal skills */}

        <div className="techniqal-skill">
          <div className="flex">
            <div className="clas">
              <h1>Techniqal Skills</h1>
            </div>
            <div className="clas">
              <h1>Five star</h1>
            </div>
          </div>

          <div className="skills-field">
            <div className="progress-bar" style={{ width: "70%" }}>
              React.js
            </div>
            <br />
            <div className="progress-bar">JavaScript</div>
          </div>
        </div>

        <div className="expireance">
          <div className="expireance-left">
            <Lottie animationData={animationdata} />
          </div>
          <div className="expireance-right">
            <h1>Expirence</h1>

            <div className="expireance-inter">
              <h3>Get a internship In Eviox Technology</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates odio quae atque tenetur maiores delectus quisquam
                cupiditate? Ea, accusamus laborum. Beatae placeat recusandae
                dicta tempora ea fugit tempore commodi ratione.
              </p>
            </div>

            <img src="images/arrow.png" alt="arrow" />

            <div className="expireance-inter">
              <h3>Get a internship In Eviox Technology</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates odio quae atque tenetur maiores delectus quisquam
                cupiditate? Ea, accusamus laborum. Beatae placeat recusandae
                dicta tempora ea fugit tempore commodi ratione.
              </p>
            </div>

            <img src="images/arrow.png" alt="arrow" />

            <div className="expireance-inter">
              <h3>Get a internship In VEECORP</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates odio quae atque tenetur maiores delectus quisquam
                cupiditate? Ea, accusamus laborum. Beatae placeat recusandae
                dicta tempora ea fugit tempore commodi ratione.
              </p>
            </div>

            <img src="images/arrow.png" alt="arrow" />

            <h4>Find A Place Where I Can  Explore My Skills</h4>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
