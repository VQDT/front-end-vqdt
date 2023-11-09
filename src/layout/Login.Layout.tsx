import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../context/auth/useAuth"

function LoginLayout() {
  const { user } = useAuth();
  return !user ? <div className="w-full min-h-screen bg-Blue flex justify-center items-center"><Outlet /></div> : <Navigate to={"/"} replace />;
}

export default LoginLayout;
