import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";

function GetSingleUser() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const { token } = useAuth();

  const updateUserInfo = async () => {
    try {
      const response = await fetch(
        `https://portfolio-server-fmd3.onrender.com/api/admin/users/delete/edit/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.log(`Error fetching user data: ${error}`);
    }
  };

  const handleUserData = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleUpdateUserData = async (e) => {
    e.preventDefault();

    try {
      const updateData = await fetch(
        `https://portfolio-server-fmd3.onrender.com/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(userData),
        }
      );

      if (updateData.ok) {
        alert("User data updated successfully");
      } else {
        throw new Error("Failed to update user data");
      }
    } catch (error) {
      console.log(`Error updating user data: ${error}`);
      // Optionally, provide feedback to the user about the error
      alert("Failed to update user data. Please try again.");
    }
  };

  useEffect(() => {
    updateUserInfo();
  }, [params.id]);

  return (
    <div className="admin-form">
      <center>
        <h1>UPDATE USER DATA</h1>
      </center>
      <br />
      <br />
      <form onSubmit={handleUpdateUserData}>
        <div className="reg-group">
          <input
            type="text"
            className="res-input"
            name="username"
            required
            autoComplete="off"
            onChange={handleUserData}
            value={userData.username}
          />
          <label>Name</label>
        </div>
        <br />
        <div className="reg-group">
          <input
            type="email"
            className="res-input"
            name="email"
            required
            autoComplete="off"
            onChange={handleUserData}
            value={userData.email}
          />
          <label>Email</label>
        </div>
        <br />
        <div className="reg-group">
          <input
            type="tel"
            className="res-input"
            name="phone"
            required
            autoComplete="off"
            onChange={handleUserData}
            value={userData.phone}
          />
          <label>Mobile</label>
        </div>
        <br />
        <br />
        <center>
          <button type="submit" className="submit-button">
            <span className="button-content">Update</span>
          </button>
        </center>
      </form>
    </div>
  );
}

export default GetSingleUser;
