import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import Button from "../components/button/Button";


const Login = () => {


  // These all import from local storage.
  const {storeTokenInLS} = useAuth()
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
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });
      const res_data = await response.json();
      
      if(response.ok){
        console.log("res from token", res_data);
        storeTokenInLS(res_data.token);

        setUser({
          email: "",
          password: "",
        });
        toast.success("You login successfully!!");
        navigate('/')
      } else{
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        console.log("Invalid email");
      }

    } catch (error) {
      console.log("Login", error);
    }
  };

  return (
    <div>
      <div className="reg-container">
        <div className="img">
          <img
            src="images/register.png"
            alt="This is a registeration img"
            width={200}
          />
        </div>
        <div className="form-reg">
          <form onSubmit={handleSubmit}>
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
              <Button/>
            {/* <button className="btn">Log In</button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
