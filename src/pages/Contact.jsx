import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import Lottie from "lottie-react";
import animationdata from "../assets/lottie/boxing.json";
import { motion } from "framer-motion";
import SocialIcon from "../components/social/SocialIcon";
import { toast } from "react-toastify";

export const Contact = ({ setProgress }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  const { enter } = useAuth();

  // progreess bar

  useEffect(() => {
    setProgress(90)
    setTimeout(() => {
      setProgress(100)
    }, 2000)
  }, [])

  // If the user is logged in, pre-fill the form fields with user data
  useEffect(() => {
    if (enter) {
      setUser({
        username: enter.username,
        email: enter.email,
        message: "",
      });
    }
    enter
  }, [enter]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to the database.
    try {
      const response = await fetch("https://portfolio-server-fmd3.onrender.com/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(response);

      if (response.ok) {
        toast.success(`Your Message Sent Successfully!!`)
        setUser({
          username: "",
          email: "",
          message: "",
        });
      }else{
        toast.error("Faild To Send Message..")
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <div className="contact-form">
        <motion.div animate={{ y: 100 }} className="contact-container">
          <div className="service-form">
            <p>{`Your Email ${enter ? enter.email : ""}`}</p>
            <h1>Let's Make Waves in the Digital Realm!</h1>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <input
                  type="text"
                  name="username"
                  autoComplete="off"
                  className="user-input"
                  id="username"
                  // placeholder="Username"
                  required
                  value={user.username}
                  onChange={handleInput}
                />
                <label className="label">Username</label>
              </div>
              <br />
              <br />
              {/* <label htmlFor="email">Email</label> */}
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  id="email"
                  className="user-input"
                  // placeholder="Email"
                  required
                  value={user.email}
                  onChange={handleInput}
                />
                <label className="label">Email</label>
              </div>
              <br />
              <br />
              {/* <label htmlFor="message">Message</label> */}
              <div className="input-container">
                <textarea
                  name="message"
                  id="contact-message"
                  // placeholder="Message"
                  className="user-input"
                  required
                  value={user.message}
                  onChange={handleInput}
                ></textarea>
                <label className="label">Message</label>
              </div>
              <br />
              <button type="submit" className="submit-button">
                <span className="button-content">SEND</span>
              </button>
              {/* <button >Send Now</button> */}
            </form>
          </div>

          <div className="contact-text">
            <h1>Let's Connect and Create Something Amazing Together!</h1>
            <br />
            <p>
              Ready to turn your ideas into reality? Whether you have a project
              in mind, a question to ask, or simply want to say hello, I'm here
              and eager to hear from you!
              <br />
              <br />
              Drop me a message and let's start a conversation. Together, we can
              craft innovative solutions, bring your visions to life, and make
              magic happen in the digital world. <br />
              <br />
              Don't hesitate—reach out today and let's embark on an exciting
              journey of collaboration and creativity!
            </p>
            <div className="contact-lottie" style={{ display: 'flex', gap: '40px'}}>
              <Lottie animationData={animationdata} />
              <SocialIcon />
            </div>
          </div>
        </motion.div>
      </div>

    
    </>
  );
};
