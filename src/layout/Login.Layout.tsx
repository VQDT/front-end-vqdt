import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../context/auth/useAuth"

function LoginLayout() {
  const { user } = useAuth();
  if (user){
    switch (user.roles[0].id) {
      case 1:
        return <Navigate to={"/candidato"} replace/>;
      case 2:
        return <Navigate to={"/aplicador"} replace/>;
      default:
        return <Navigate to={"/candidato"} replace/>;
    }
  }
  else{
    return <div className="w-full min-h-screen bg-Blue flex justify-center items-center"><Outlet /></div>
  }
}

export default LoginLayout;
