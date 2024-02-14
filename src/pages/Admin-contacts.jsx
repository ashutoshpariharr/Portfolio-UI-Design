import { useEffect, useState } from "react";
import "../layouts/Layout.css";
import Loding from "../components/progressBar/Loding";

const AdminContacts = ({ setProgress }) => {
  const [adminContact, setAdminContact] = useState([]);
  const [loding, setLoding] = useState(true);

  const token = localStorage.getItem("token");

  const adminContactData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      // console.log(data);
      setLoding(false);

      setAdminContact(data);
    } catch (error) {
      console.log(`Error while fetch data from the Admin Contact ${error}`);
      setLoding(false);
    }
  };
  const deleteMessage = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      console.log(data);

      adminContactData()

    } catch (error) {
      console.log(`Error deleting contact: ${error}`);
    }
  };

  useEffect(() => {
    setProgress(10);
    setProgress(20);
    setProgress(30);
    setProgress(40);
    setProgress(90);
    setProgress(100);

    adminContactData();
  }, []);

  return (
    <>
      <center style={{ padding: "2rem" }}>
        <h1 style={{ padding: "1rem" }}>Contact Peoples</h1>
      </center>

      {loding ? (
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
          <p>Loding...</p>
        </div>
      ) : (
        <div className="adminUser">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(adminContact) &&
                adminContact.map((information, index) => (
                  <tr key={index}>
                    <td>{information.username}</td>
                    <td>{information.email}</td>
                    <td>{information.message}</td>
                    <td>
                      <button className="middleText-btn">Edit</button>
                    </td>
                    <td>
                      <button
                        className="middleText-btn"
                        onClick={() => deleteMessage(information._id)}
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
};

export default AdminContacts;
