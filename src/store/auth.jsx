import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [enter, setEnter] = useState("");

  // const authorizationToken =  token;


  //Store token in the browser.
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  // use a logout functionalty in logout page.
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem('token');
  };

  let isLoggedIn = !!token;
  // console.log("is Logged in", isLoggedIn);

  //  Authentication in store data contact page after login.

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("userdata", data.userData);
        setEnter(data.userData);
      }
    } catch (error) {
      console.log(error, "This is error from userAthentication");
    }
  };

  // This is fetch data from database using api and destribute in service form

  const [service, setService] = useState([]);
  
  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      });
  
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
  
        // Assuming 'response' contains the services array
        setService(data.response || []);
  
        console.log("Response fetch successfully from services");
      } else {
        console.log("Failed to fetch services");
      }
    } catch (error) {
      console.log(`Error fetching services: ${error}`);
    }
  };
  
  
  
  
  
  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);
  

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLS, LogoutUser, enter, service, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// This is over delevry boy.
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("auth is not working ");
  }
  return authContextValue;
};
