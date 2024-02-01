import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonWrapper from "../components/button/ButtonWrapper";

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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque.
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ipsam,
          officiis sapiente, eius assumenda qui dolorem fugiat nam nemo, quasi
          pariatur modi! Culpa reiciendis incidunt, placeat ducimus eligendi
          vero qui, similique quod sunt, aut velit?
        </p>
      </div>
      <div className="reg-right">
        <h1>Create Account</h1>
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
            <span className="bar"></span>
            <label>Name</label>
          </div>
          <br />
          <br />
          <div className="reg-group">
            <input
              required
              type="email"
              className="res-input"
              name="email"
              //  placeholder="Enter Your email.."
              id="username"
              autoComplete="off"
              onChange={handleInput}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Email</label>
          </div>
          <br />
          <br />
          <div className="reg-group">
            <input
              required
              className="res-input"
              type="number"
              name="phone"
              // placeholder="Enter Your number.."
              id="username"
              autoComplete="off"
              onChange={handleInput}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Mobile</label>
          </div>
          <br />
          <br />
          <div className="reg-group">
            <input
              required
              type="password"
              className="res-input"
              name="password"
              //  placeholder="Enter Your secreat password.."
              id="username"
              autoComplete="off"
              onChange={handleInput}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Password</label>
          </div>

          <div className="reg-group">

          <div className="checkbox-wrapper">
            <input id="terms-checkbox-37" name="checkbox" type="checkbox" />
            <label className="terms-label" htmlFor="terms-checkbox-37">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 200 200"
                className="checkbox-svg"
              >
                <mask fill="white" id="path-1-inside-1_476_5-37">
                  <rect height="200" width="200"></rect>
                </mask>
                <rect
                  mask="url(#path-1-inside-1_476_5-37)"
                  strokeWidth="40"
                  className="checkbox-box"
                  height="200"
                  width="200"
                ></rect>
                <path
                  strokeWidth="15"
                  d="M52 111.018L76.9867 136L149 64"
                  className="checkbox-tick"
                ></path>
              </svg>
              <span className="label-text">Checkbox</span>
            </label>
          </div>

          </div>

          <div className="button-wrapper">
            <ButtonWrapper />
          </div>
          {/* <button className="btn">Register Now</button> */}
        </form>
      </div>
    </div>
  );
};

export default Register;
