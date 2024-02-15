import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import Loding from "../components/progressBar/Loding";
import "../layouts/Layout.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function AdminUsers({ setProgress }) {
  const [adminusers, setAdminusers] = useState([]);
  const [loading, setLoding] = useState(true);
  const { token } = useAuth();

  const authUser = async () => {
    try {
      const response = await fetch("https://portfolio-server-fmd3.onrender.com/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setLoding(false);
      // console.log(data);
      setAdminusers(data);
    } catch (error) {
      setLoding(false);
      console.log(`Error while fetching data from the database ${error}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://portfolio-server-fmd3.onrender.com/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Check if the response is not OK
      if (!response.ok) {
        toast.error("User Not Deleted!")
        throw new Error("Failed to delete user");
      }

      if(response.ok){
        toast.success("User Deleted Successfully!")
      }

      // Check if the response is JSON
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        console.log(`user after Deleted ${data}`);
      } else {
        // Handle the case where response is not JSON
        const text = await response.text();
        console.log(`Non-JSON response: ${text}`);
      }

      // If response is OK, fetch updated user list
      authUser();
    } catch (e) {
      console.log(`Error to delete user ${e}`);
    }
  };

  useEffect(() => {
    setProgress(30);
    setProgress(50);
    setProgress(80);
    setProgress(90);
    setProgress(100);

    authUser();
  }, []);

  return (
    <>
      <center style={{ padding: "2rem" }}>
        <h1 style={{ padding: "1rem" }}>Registered Users</h1>
      </center>

      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Loding />
          <br />
          <p>Loading...</p>
        </div>
      ) : (
        <div className="adminUser">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {adminusers.map((information, index) => (
                <tr key={index}>
                  <td>{information.username}</td>
                  <td>{information.email}</td>
                  <td>{information.phone}</td>
                  <td>
                    <Link to={`/admin/user/${information._id}/edit`}>
                      <button className="middleText-btn">Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="middleText-btn"
                      onClick={() => handleDelete(information._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default AdminUsers;
