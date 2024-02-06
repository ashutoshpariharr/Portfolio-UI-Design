import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonWrapper from "../components/button/ButtonWrapper";
import Lottie from "lottie-react";
import animationdata from "../assets/lottie/Dog.json";

const Register = () => {
  // this is for storeToken to the browser
  const { storeTokenInLS } = useAuth();

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
        <h1>
          MERNing to Impress <br /> Join the Code Party
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ipsam,
          officiis <br /> sapiente, eius assumenda qui dolorem fugiat nam nemo,
          quasi pariatur modi! <br /> Culpa reiciendis incidunt, placeat ducimus
          eligendi vero qui, similique <br /> quod sunt, aut velit?
        </p>
        <div className="reg-lottie">
          <Lottie animationData={animationdata} />
        </div>
      </div>
      <div className="reg-right">
        <h1>Create Account</h1>
        <p>Enter Your Personal Details</p>
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
            <ButtonWrapper />
          </div>
        </form>
        <ButtonWrapper/>
      </div>
    </div>
  );
};

export default Register;
