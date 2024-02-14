import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Logout = ({ setProgress }) => {
  const { LogoutUser } = useAuth();

  useEffect(() => {
    setProgress(80)
    setTimeout(() => {
      setProgress(100)
    }, 1000);
  }, [])

  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);

  return <Navigate to="/login" />;
};
