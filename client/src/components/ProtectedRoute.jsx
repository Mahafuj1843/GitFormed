import React from 'react'
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, path }) => {
    if (localStorage.getItem("token")) {
        return children;
      } else {
        ErrorToast("Please login first");
        localStorage.setItem("intendedRoute", path);
        return <Navigate to="/" />;
      }
}

export default ProtectedRoute
