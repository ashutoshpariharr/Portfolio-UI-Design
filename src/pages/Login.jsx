import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Button from "../components/button/Button";
import Lottie from "lottie-react";
import animationdata from "../assets/lottie/police.json";

const Login = () => {
  // These all import from local storage.
  const { storeTokenInLS } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
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
    // console.log(user);

    // This for send data from server

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();

      if (response.ok) {
        console.log("res from token", res_data);
        storeTokenInLS(res_data.token);

        setUser({
          email: "",
          password: "",
        });
        toast.success("You login successfully!!");
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
        console.log("Invalid email");
      }
    } catch (error) {
      console.log("Login", error);
    }
  };

  return (
    <div>
      <div className="log-container">
        <div className="log-right">
          <center>
            <h1>👮 Note from Officer Login</h1>
            <br />
          </center>
          <p style={{ marginLeft: "25px" }}>
            If your password is stronger than my
            morning coffee, you're good to go! If not, consider upgrading it to
            Fort Knox levels. After all, we're dealing with top-secret portfolio
            files, not grandma's cookie recipe. 🍪 Good luck, Detective! And may
            the code be ever in your favor.
          </p>
          <div className="log-lottie">
            <Lottie animationData={animationdata} />
          </div>
          {/* <h1>Log In</h1> */}
        </div>

        <div className="log-reg">
          <form onSubmit={handleSubmit}>
            <div className="log-heding">
              <img src="images/logo.png" width={150} alt="logo" />
              <br />
              <h1>Welcome, Back!</h1>
              <p>Please Enter Your Details</p>
            </div>

            <div className="log-inputs">
              <div className="group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>

                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Enter Your Password"
                  id="username"
                  required
                  autoComplete="off"
                  onChange={handleInput}
                />
              </div>
              <br />
              <div className="group">
                <svg
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                >
                  <path
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your email.."
                  id="username"
                  className="input"
                  required
                  autoComplete="off"
                  onChange={handleInput}
                />
              </div>

              <div className="button-login">
                <Button />
              </div>
              <Link to="/register">
                <center>
                <p className="log-link">Don't have account <span>Signup</span></p>

                </center>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
