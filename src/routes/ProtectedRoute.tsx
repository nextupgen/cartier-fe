/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "~/provider/authProvider";

const ProtectedRoute = () => {
  const token = useAuth()?.token;
  const location = useLocation();
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};
export default ProtectedRoute;
