import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ButtonWrapper from "../components/button/ButtonWrapper";

const Register = () => {

  
  // this is for storeToken to the browser
  const {storeTokenInLS} = useAuth();

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
        toast.success("Registration successfully")
        navigate('/');
      }else{
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
      }
    } catch (error) {
      console.log("Register", error)
    }

  };

  return (
    <div>
      <div className="reg-container">
        <div className="img">
          <img
            src="images/login.png"
            alt="This is a registeration img"
          />
        </div>
        <div className="form-reg">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Your beautiful name.."
              id="username"
              required
              autoComplete="off"
              onChange={handleInput}
              value={user.username}
            />
            <br />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your email.."
              id="username"
              required
              autoComplete="off"
              onChange={handleInput}
            />
            <br />
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              name="phone"
              placeholder="Enter Your number.."
              id="username"
              required
              autoComplete="off"
              onChange={handleInput}
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your secreat password.."
              id="username"
              required
              autoComplete="off"
              onChange={handleInput}
            />

            <br />
            <br />
            <ButtonWrapper/>
            {/* <button className="btn">Register Now</button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
