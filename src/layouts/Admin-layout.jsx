import { Link, Navigate, Outlet } from "react-router-dom";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsMenuButtonWideFill,
} from "react-icons/bs";
import { useEffect } from "react";
import { useAuth } from "../store/auth";
import Magnetic from "../components/social/Magnetic";

function AdminLayout({ setProgress }) {
  useEffect(() => {
    setProgress(40);
    setProgress(80);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
  }, []);

  const { enter, isLoding } = useAuth();
  // console.log(enter);

  if (isLoding) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!enter.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <aside id="sidebar">
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <BsCart3 className="icon_header" /> Admin Panel
          </div>
        </div>

        <ul className="sidebar-list">

          <li className="sidebar-list-item">
            <Magnetic>
              <Link to="/admin/users" style={{ color: "white" }} id="navaa">
                <BsFillArchiveFill className="icon-admin" /> Users
              </Link>
            </Magnetic>
          </li>

          <li className="sidebar-list-item">
            <Magnetic>
              <Link to="/admin/contacts" style={{ color: "white" }} id="navaa">
                <BsFillGrid3X3GapFill className="icon-admin" /> Contacts
              </Link>
            </Magnetic>
          </li>

          <li className="sidebar-list-item">
            <Magnetic>
              <Link to="/register" style={{ color: "white" }} id="navaa">
                <BsPeopleFill className="icon-admin" /> Register
              </Link>
            </Magnetic>
          </li>

          <li className="sidebar-list-item">
            <Magnetic>
              <Link to="/contact" style={{ color: "white" }} id="navaa">
                <BsMenuButtonWideFill className="icon-admin" /> Reports
              </Link>
            </Magnetic>
          </li>
        </ul>
      </aside>

      <Outlet />
    </>
  );
}

export default AdminLayout;
