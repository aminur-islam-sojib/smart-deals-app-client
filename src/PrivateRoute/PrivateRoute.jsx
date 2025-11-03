// PrivateRoute.jsx
import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // while auth state is being determined, show nothing or a loader
  if (loading) return <div>Loading...</div>;

  if (!user) {
    // pass where the user tried to go
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
