import { Link, Outlet } from "react-router-dom"
import { FaUser, FaHome } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { SiAmazonsimpleemailservice } from "react-icons/si";

function AdminLayout() {
  return (
//    <Outlet>
   <>
   <header>
    <div className="contanent">
        <nav>
            <ul>
                <Link to='/admin/users'> <FaUser/> Users</Link>
                <Link to='/admin/contacts'> <IoMdContacts /> Contacts</Link>
                <Link to='/service'><SiAmazonsimpleemailservice /> Service</Link>
                <Link to='/'> <FaHome /> Home</Link>
            </ul>
        </nav>
    </div>
   </header>
   <Outlet/>
   </>
  )
}

export default AdminLayout
