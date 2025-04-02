import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("authToken"); // ✅ FIXED: Now checks localStorage

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login"); // ✅ FIXED: Redirects to login instead of home page
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // Return loading spinner or nothing while redirecting
  }

  return children;
};

export default ProtectedRoute;
