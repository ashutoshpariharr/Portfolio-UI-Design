import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";

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
    <div>
      <p>{`Your Email ${enter ? enter.email : ""}`}</p>
      <h1>This is the contact form</h1>
      <div className="contact-container">
        <div className="img-serv"></div>
        <div className="service-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              autoComplete="off"
              id="username"
              placeholder="Username"
              required
              value={user.username}
              onChange={handleInput}
            />
            <br />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              id="email"
              placeholder="Email"
              required
              value={user.email}
              onChange={handleInput}
            />
            <br />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required
              value={user.message}
              onChange={handleInput}
            ></textarea>
            <br />
            <button type="submit">Send Now</button>
          </form>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1704551877">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
    </svg>
</div>
    </div>
  );
};
