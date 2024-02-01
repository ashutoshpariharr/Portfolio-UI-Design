import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import Lottie from "lottie-react";
import animationdata from "../assets/lottie/boxing.json";

export const Contact = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  const { enter } = useAuth();

  // If the user is logged in, pre-fill the form fields with user data
  useEffect(() => {
    if (enter) {
      setUser({
        username: enter.username,
        email: enter.email,
        message: "",
      });
    }
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
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(response);

      if (response.ok) {
        alert(`Your message sent successfully ${enter.username} to the admin`);

        // Clear the form fields on successful submission
        setUser({
          username: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <div className="contact-form">
        <div className="contact-container">
         

          <div className="service-form">
            <p>{`Your Email ${enter ? enter.email : ""}`}</p>
            <h1>This is the contact form</h1>
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
            <h1>Here We Are..</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo vero
              iusto fuga eum repudiandae molestiae hic ipsam earum nam error
              temporibus nulla optio libero sunt doloribus quam maiores non
              atque incidunt, dolore rerum perspiciatis! Labore expedita
              inventore molestiae, amet corporis optio quod ex quas provident
              nobis. Recusandae velit fugit nulla.
            </p>
            <div className="contact-lottie">
              <Lottie animationData={animationdata} />
            </div>
          </div>

        </div>
      </div>

      {/* <div className="custom-shape-divider-bottom-1706693376">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className="shape-fill"
            ></path>
          </svg>
        </div> */}
    </>
  );
};
