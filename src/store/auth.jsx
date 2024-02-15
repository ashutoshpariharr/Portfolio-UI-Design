import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [enter, setEnter] = useState("");
  const [isLoding, setIsLoding] = useState(true);

  //Store token in the browser.
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  // use a logout functionalty in logout page.
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  let isLoggedIn = !!token;

  const userAuthentication = async () => {
    try {
      // Retrieve token from local storage

      const token = localStorage.getItem("token");
      // console.log("Token:", token);

      setIsLoding(true);

      const response = await fetch("https://portfolio-server-fmd3.onrender.com/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // userAuthentication()

      if (response.ok) {
        const data = await response.json();
        setEnter(data.msg);
        setIsLoding(false);
      } else {
        setIsLoding(false);
      }
    } catch (error) {
      console.log(error, "This is error from userAuthentication");
    }
  };

  // This is fetch data from database using api and destribute in service form

  const [service, setService] = useState([]);

  const getServices = async () => {
    try {
      const response = await fetch("https://portfolio-server-fmd3.onrender.com/api/data/service", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
     
        setService(data.response || []);

        // console.log("Response fetch successfully from services");
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
      value={{
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        enter,
        service,
        token,
        isLoding,
      }}
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
