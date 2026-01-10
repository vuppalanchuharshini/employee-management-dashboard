import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuth = localStorage.getItem("isAuthenticated");

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
