import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../page/Context/UserAuthContext";

const ProtectedRoute = ({ children }) => {
  let { user } = UserAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;