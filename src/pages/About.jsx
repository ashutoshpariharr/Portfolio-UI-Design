import Lottie from "lottie-react";
import ProgressLine from "../components/progressBar/ProgressLine.jsx";
import { useAuth } from "../store/auth";
import animationdata from "../assets/lottie/working.json";
import { motion } from "framer-motion";
import { Section } from "../components/social/TextAni.jsx";
import { useEffect } from "react";

const About = ({ setProgress }) => {
  const { enter } = useAuth();
  useEffect(() => {
    setProgress(60);
    setTimeout(() => {
      setProgress(100);
    }, 2000);
  }, []);

  return (
    <div>
      <div className="about-container">
        <div className="container">
          <motion.div
            animate={{ x: 100 }}
            transition={{ duration: 2, type: "spring", damping: 2 }}
            className="home-content"
          >
            <Section>
              {/* <p>{`Welcome, ${enter.username} in over World.`}</p> */}
              <p>Welcome, {enter ? enter.username : "in over World."}</p>
            </Section>
            <h1>About Me,</h1>
            <br />

            <span className="about-information">
              Hello! I'm Ashutosh Parihar, a passionate Frontend Web Developer,
              MERN Stack Developer based in Agra, Uttar Pradesh, India. With a
              focus on user-friendly design and captivating web experiences, I'm
              dedicated to bringing innovative ideas to life.
              <br /> Currently, I'm thriving as a Frontend Developer at VEECORP
              in Mumbai, Maharashtra. Grateful for the opportunities that have
              shaped my professional journey, I'm excited for the next chapter
              in my career.
            </span>

            <div className="home-btn"></div>
          </motion.div>
          <div className="home-about">
            <div className="multylayer"></div>
          </div>
        </div>

        {/* This is About section for Skills sections */}

        <div className="skill-container">
          <Section>
            <h1>I Can Help You With</h1>
          </Section>

          <Section>
            <div className="skill-cards">
              <div className="skill-item skill-card1">
                <span>01</span>
                <hr />
                <h1>Web Design</h1> <br />
                <p>
                  I'm skilled at making websites look great and easy to use. I
                  know a lot about building the parts of websites that people
                  see and interact with, using tools like Figma. Let's work
                  together to make your website stand out!
                </p>
              </div>

              <div className="skill-item skill-card2">
                <span>02</span>
                <hr />
                <h1>Web Development</h1> <br />
                <p>
                  I'm a web developer skilled in crafting dynamic and engaging
                  websites. From responsive layouts to powerful backend
                  functionalities, I specialize in bringing digital ideas to
                  life. With expertise in HTML, CSS, JavaScript, Node.js,
                  MongoDB, and more, I'm equipped to turn your web vision into
                  reality. Let's collaborate!
                </p>
              </div>

              <div className="skill-item skill-card3">
                <span>03</span>
                <hr />
                <h1>MERN Development</h1>
                <br />
                <p>
                  With expertise in the MERN (MongoDB, Express.js, React.js,
                  Node.js) stack, I specialize in building robust and scalable
                  web applications. From creating dynamic interfaces with
                  React.js to designing efficient backend systems with Node.js
                  and MongoDB, I've successfully developed projects like the
                  Flipkart app and many more. Let's work together to bring your
                  ideas to life!
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* Soft skills */}

        <div className="soft-skills">
          <Section>
            <div className="clas">
              <h1>Techniqal Skills</h1>
            </div>
          </Section>

          <Section>
            <ProgressLine
              label="React JS"
              visualParts={[
                {
                  percentage: "95%",
                  color: "green",
                },
              ]}
            />
            <ProgressLine
              label="Redux"
              visualParts={[
                {
                  percentage: "85%",
                  color: "#50C03A",
                },
              ]}
            />
            <ProgressLine
              label="JavaScript"
              visualParts={[
                {
                  percentage: "90%",
                  color: "green",
                },
              ]}
            />
            <ProgressLine
              label="Node JS"
              visualParts={[
                {
                  percentage: "85%",
                  color: "#32AE11",
                },
              ]}
            />
            <ProgressLine
              label="HTML5"
              // backgroundColor="lightblue"
              visualParts={[
                {
                  percentage: "93%",
                  color: "green",
                },
              ]}
            />
          </Section>

          <Section>
            <ProgressLine
              label="CSS3"
              visualParts={[
                {
                  percentage: "85%",
                  color: "#50C03A",
                },
              ]}
            />

            <Section>
              <ProgressLine
                label="Express JS"
                visualParts={[
                  {
                    percentage: "82%",
                    color: "#3CB41F",
                  },
                ]}
              />
              <ProgressLine
                label="Mongo DB"
                visualParts={[
                  {
                    percentage: "90%",
                    color: "green",
                  },
                ]}
              />
            </Section>
            <ProgressLine
              label="GIT"
              visualParts={[
                {
                  percentage: "79%",
                  color: "#3CB41F",
                },
              ]}
            />
            <ProgressLine
              label="Material UI"
              visualParts={[
                {
                  percentage: "95%",
                  color: "green",
                },
              ]}
            />
          </Section>
          <Section>
            <ProgressLine
              label="Framer Motion (Animation)"
              visualParts={[
                {
                  percentage: "73%",
                  color: "#6FD261",
                },
              ]}
            />

            <ProgressLine
              label="Boostrap"
              visualParts={[
                {
                  percentage: "70%",
                  color: "#8EE48A",
                },
              ]}
            />
          </Section>
        </div>

        {/* <Section> */}
        {/* Techniqal skills */}

        <div className="soft-skills">
          <div className="clas">
            <h1>Soft Skills</h1>
          </div>

          {/* <Section> */}
          <ProgressLine
            label="Communication"
            visualParts={[
              {
                percentage: "96%",
                color: "#ADD8E6",
              },
            ]}
          />
          <span style={{ fontSize: "10px" }}>
            Ability to convey ideas clearly and effectively, both verbally and
            in writing.
          </span>
          <br />
          <br />
          <br />
          <ProgressLine
            label="Collaboration"
            visualParts={[
              {
                percentage: "90%",
                color: "#ADD8E6",
              },
            ]}
          />
          <span style={{ fontSize: "10px" }}>
            Working effectively with others in a team environment, fostering
            teamwork and cooperation.
          </span>
          <br />
          <br />
          <br />
          <ProgressLine
            label="Problem-solving"
            visualParts={[
              {
                percentage: "94%",
                color: "#ADD8E6",
              },
            ]}
          />
          <span style={{ fontSize: "10px" }}>
            {" "}
            Analyzing issues, identifying solutions, and making informed
            decisions.
          </span>
          <br />
          <br />
          <br />

          <ProgressLine
            label="Time management"
            visualParts={[
              {
                percentage: "97%",
                color: "#ADD8E6",
              },
            ]}
          />
          <span style={{ fontSize: "10px" }}>
            Organizing and prioritizing tasks efficiently to meet deadlines and
            goals.
          </span>
          <br />
          <br />
          <br />
          <ProgressLine
            label="Leadership"
            visualParts={[
              {
                percentage: "95%",
                color: "#ADD8E6",
              },
            ]}
          />
          <span style={{ fontSize: "10px" }}>
            {" "}
            Inspiring and motivating others, taking initiative, and guiding
            projects to success.
          </span>
          <br />
          <br />
          <br />
          <ProgressLine
            label="Creativity"
            visualParts={[
              {
                percentage: "93%",
                color: "#ADD8E6",
              },
            ]}
          />
          <span style={{ fontSize: "10px" }}>
            Thinking outside the box to generate innovative ideas and solutions.
          </span>
          <br />
          <br />
          <br />
          <ProgressLine
            label="Emotional intelligence"
            visualParts={[
              {
                percentage: "91%",
                color: "#ADD8E6",
              },
            ]}
          />
          <span style={{ fontSize: "10px" }}>
            Understanding and managing emotions, empathizing with others, and
            maintaining interpersonal relationships.
          </span>
          <br />
          <br />
          <br />
          <ProgressLine
            label="Critical thinking"
            visualParts={[
              {
                percentage: "95%",
                color: "#ADD8E6",
              },
            ]}
          />
          <span style={{ fontSize: "10px" }}>
            Evaluating information, reasoning logically, and making sound
            judgments.
          </span>
          <br />
          <br />
          <br />
        </div>

        {/* </Section> */}

        {/* Expirenace section*/}
        <div className="expireance">
          <div className="expireance-left">
            <Lottie animationData={animationdata} />
          </div>
          <div className="expireance-right">
            <h1 style={{ fontSize: "3rem" }}>Expirence</h1>
            <br />

            <div className="expireance-inter">
              <h3>Freelancing</h3>
              <p>
                Before diving into internships, I laid the groundwork for my
                career through freelancing. Working on various projects via
                platforms like Upwork, Fiverr, and more. I gained practical
                experience in web development. Each project refined my skills
                and provided valuable insights into client communication and
                project management. This early exposure equipped me with the
                versatility and resilience needed to thrive in the dynamic world
                of remote work.
              </p>
            </div>

            <img src="images/arrow.png" alt="arrow" />

            <div className="expireance-inter">
              <h3>Get a internship In Eviox Technology</h3>
              <p>
                Engaged in a virtual internship, I seamlessly integrated
                theoretical knowledge with practical skills. Collaborating
                remotely, I refined my web development expertise through
                hands-on projects. This experience, though unpaid, provided
                invaluable insights into industry workflows and enhanced my
                portfolio significantly.
              </p>
            </div>

            <img src="images/arrow.png" alt="arrow" />

            <div className="expireance-inter">
              <h3>
                Get a internship In VEECORP Solutions Private Limited (Mumbai){" "}
              </h3>
              <p>
                During my internship at VEECORP Solutions Private Limited, I
                gained hands-on experience and enhanced my skills in front-end
                development. I worked on diverse projects, including a tender
                website, an admin panel, and a jewelry eCommerce platform for
                Sionaa. Collaborating with the team, I contributed to the
                projects' success by creating visually appealing and
                user-friendly interfaces. Through this experience, I developed a
                strong understanding of industry best practices and demonstrated
                my commitment to professional growth and excellence.
              </p>
            </div>

            <img src="images/arrow.png" alt="arrow" />

            <h4>Find A Place Where I Can Explore My Skills</h4>
          </div>
        </div>
        {/* </Section> */}
      </div>
    </div>
  );
};

export default About;
