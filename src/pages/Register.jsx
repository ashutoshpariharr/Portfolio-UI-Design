import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonWrapper from "../components/button/ButtonWrapper";
import Lottie from "lottie-react";
import animationdata from "../assets/lottie/Dog.json";
import { motion } from "framer-motion";
import { Section } from "../components/social/TextAni";
import Loding from "../components/progressBar/Loding";

const Register = ({ setProgress }) => {
  const [loading, setLoding] = useState(false);
  // this is for storeToken to the browser
  const { storeTokenInLS } = useAuth();

  useEffect(() => {
    setProgress(90);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
  }, []);

  // this is for navigate register to login
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    // console.log(e);
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    // handle fetch data from the server

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(response);
      const res_data = await response.json();
      console.log("res from token", res_data);

      setLoding(true);

      setTimeout(() => {
        setLoding(false);
      }, 4000);

      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        toast.success("Registration successfully");
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (error) {
      console.log("Register", error);
    }
  };

  return (
    <div className="reg-container">
      <div className="reg-left">
        <Section>
          <h1>Register for Exclusive Updates For Better Understanding</h1>
          <br />
          <p>
            Be the first to know about my latest projects, insights, and
            creative endeavors by subscribing to my portfolio. Join my community
            and stay connected with my journey in the world of web development.
            Sign up now to receive exclusive updates and behind-the-scenes
            content directly to your inbox. Let's embark on this adventure
            together!
          </p>
        </Section>
        <div className="reg-lottie">
          <Section>
            <Lottie animationData={animationdata} />
          </Section>
        </div>
      </div>
      <motion.div
        animate={{ x: 70 }}
        transition={{ duration: 2, type: "spring", damping: 2 }}
        className="reg-right"
      >
        <Section>
          <h1>Create Account</h1>
          <p>Enter Your Personal Details</p>
        </Section>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="reg-group">
            <input
              type="text"
              className="res-input"
              name="username"
              id="username"
              required
              autoComplete="off"
              onChange={handleInput}
              value={user.username}
            />
            <span className="highlight"></span>
            <label>Name</label>
          </div>
          <br />
          <div className="reg-group">
            <input
              required
              type="email"
              className="res-input"
              name="email"
              id="username"
              autoComplete="off"
              onChange={handleInput}
            />
            <span className="highlight"></span>
            <label>Email</label>
          </div>
          <br />
          <div className="reg-group">
            <input
              required
              className="res-input"
              type="number"
              name="phone"
              id="username"
              autoComplete="off"
              onChange={handleInput}
            />
            <span className="highlight"></span>
            <label>Mobile</label>
          </div>
          <br />
          <div className="reg-group">
            <input
              required
              type="password"
              className="res-input"
              name="password"
              id="username"
              autoComplete="off"
              onChange={handleInput}
            />
            <span className="highlight"></span>

            <label>Password</label>
          </div>
          <br />
          <div className="align">
            <p>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <span> Terms and Conditions apply </span>
              Remember Me For 30 Days
            </p>

            <br />
          </div>

          <div className="button-wrapper">
            <Section>{loading ? <Loding /> : <ButtonWrapper />}</Section>
          </div>
        </form>
        <Section>
          <div className="reg-log">
            <NavLink className="Navlink" to="/login">
              <button className="banner-btn log-buton">Log In</button>
            </NavLink>
          </div>
        </Section>
      </motion.div>
    </div>
  );
};

export default Register;
