import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "../../style.css";
import { Section } from "../social/TextAni";
// import { Link } from "react-router-dom";

const ServiceCard = () => {
  return (
    <div className="serviceCard">
      <div className="service-item">
        <span className="serviceSpan">Projects</span>
        <Section>
          <p>
            These projects collectively illustrate my journey from learning
            fundamental web development languages to mastering advanced
            frameworks and technologies, culminating in a diverse portfolio
            showcasing my proficiency across the full stack of web development.
          </p>
        </Section>
      </div>
      <br />

      <Section>
        <HorizontalScrollCarousel />
      </Section>

      <motion.div
        animate={{ y: 100 }}
        transition={{ duration: 3, type: "spring", damping: 2 }}
        className="service-item"
      >
        <p>
          These projects collectively illustrate my journey from learning
          fundamental web development languages to mastering advanced frameworks
          and technologies, culminating in a diverse portfolio showcasing my
          proficiency across the full stack of web development.
          <b>Every Project Use Git</b>
        </p>
        <br />
        <br />
        {/* <span className="serviceSpan">Scroll up</span> */}
        <h3>Why Choose Me?</h3>
        <p>
          With a proven track record of successfully executing diverse projects
          across the web development spectrum, I bring a unique blend of
          creativity, technical expertise, and dedication to every task. My
          passion for continuous learning and my ability to adapt to new
          technologies make me the ideal candidate for your project. Whether you
          need a simple website or a complex web application, I have the skills
          and the drive to deliver exceptional results.
        </p>
        <br />
        <br />
        <h3>Seeking Employment</h3>
        <p>
          Driven by a relentless pursuit of excellence, I am actively seeking
          opportunities to contribute my expertise to a dynamic and
          forward-thinking organization. With a solid foundation in web
          development and a passion for innovation, I am confident in my ability
          to make meaningful contributions to your team. Let's collaborate to
          bring your digital vision to life and propel your organization to new
          heights.
        </p>
      </motion.div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="target">
      <div className="sticky">
        <motion.div style={{ x, display: "flex", gap: 20 }}>
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};
const Card = ({ card }) => {
  return (
    <div key={card.id} className="root-card">
      <div
        className="background-image"
        style={{
          loading: "lazy",
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50%",
        }}
      ></div>
      <div className="content">
        <p>{card.title}</p>
      </div>
      <div className="content heading-card">
        <span>{card.heding}</span>
      </div>
      <div className="content button-card">
        <a href={card.BtnUrl} target="_blank">
          <button className="middleText-btn">Visit</button>
        </a>
        <a href={card.codeUrl} target="_blank">
          <button className="middleText-btn">Code</button>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;

const cards = [
  {
    url: "https://ashutosh-portfolio.onrender.com/imgs/textutil.png",
    heding: "TextUtils (REDUX)",
    title:
      "This is the app, that will arrange the text as well as make a readable formate like when, what to uppercase your all text in just one click go and check now. Skills => React JS, React-States..",

    BtnUrl: "https://text-manage.onrender.com/",
    codeUrl: "https://github.com/ashutoshpariharr/TextUtils",
    id: 6,
  },

  {
    url: "https://images.unsplash.com/photo-1654573817889-296cad084c97?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heding: "Flipkart Clone (MERN)",
    title:
      "Engineered a clone of the Flipkart app using React.js Node.js, Express, and MongoDB, Redux, Material UI, JWT. showcasing expertise in backend development and database management for e-commerce platforms.  (after visit click on the flipkart logo",
    BtnUrl: "https://ashutoshpariharr.github.io/flipkart-app/",
    codeUrl: "https://github.com/ashutoshpariharr/flipkart-app",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1593978301851-40c1849d47d4?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heding: "Weather App (JavaScript/API)",
    title:
      "Created a weather application utilizing APIs, showcasing proficiency in JavaScript and API integration to deliver real-time weather updates with user-friendly features. Skills => HTML5, CSS3 JavaScript",

    BtnUrl: "http://asps.infinityfreeapp.com/",
    codeUrl: "https://github.com/ashutoshpariharr/Weather",
    id: 3,
  },
  {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heding: "Personal Portfolio (React)",
    title:
      "Designed and implemented a personal portfolio website using React, NPM Librarys and more. demonstrating advanced frontend skills and a keen eye for design aesthetics.",

    BtnUrl: "https://ashutosh-portfolio.onrender.com/",
    codeUrl: "https://github.com/ashutoshpariharr/Ashutosh-portfolio",

    id: 4,
  },
  {
    url: "https://images.unsplash.com/photo-1698828604775-ad9c19e3ddee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heding: "Cars Dekho (HTML, CSS, JAVASCRIPT)",
    title:
      "Find your dream car, like when you want car like they have good engine and affordabel price, and want a card dekho let's explore this website it is form you. Skills => HTML, CSS, JavaScript, Git, Problem Solving and more..",

    BtnUrl: "https://ashutosh-portfolio.onrender.com/",
    codeUrl: "https://github.com/ashutoshpariharr/potential-broccoli",
    id: 5,
  },

  {
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heding: "Physics Teacher Website Template (HTML/CSS)",
    title:
      "Crafted a bespoke website template tailored for physics educators, leveraging HTML and CSS to ensure an intuitive and visually engaging user experience.",

    BtnUrl: "https://github.com/ashutoshpariharr/Teacher-website",
    codeUrl: "https://github.com/ashutoshpariharr/Teacher-website",
    id: 1,
  },

  {
    url: "https://plus.unsplash.com/premium_photo-1679547202646-331fe6ce8a40?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heding: "Internship Projects (All Fronend Skills)",
    title:
      "During my internship, I contributed to various projects, including the development of admin panels for websites, enhancing my skills in frontend and backend technologies while collaborating effectively within a professional environment.",

    BtnUrl: "http://veecorp.in/",
    codeUrl: "https://github.com/ashutoshpariharr?tab=repositories",
    id: 7,
  },
];
