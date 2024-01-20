import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

function AdminUsers() {

  const [user, setUser] = useState([])

  const { token } = useAuth();

  const authUser = async() => {
    try{

      const response = await fetch("http://localhost:5000/api/admin/users",{
        method: 'GET',
        headers: {
          Authorization: token,
        },
      })
        const data  = response.json();
        console.log(data);
        setUser(data);

    }catch(error){
      console.log(`error while feching data from the database ${error}`);
    }
  } 


useEffect(()=> {
  authUser()
}, [])

console.log(user)



  return <>
        <h1>This is User page</h1>
    </>
}

export default AdminUsers;
