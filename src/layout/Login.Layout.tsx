import { Navigate, Outlet } from "react-router-dom";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { UserOutput } from "../models/User";

function LoginLayout() {
  const user = useAuthUser() as UserOutput;
  if (user?.roles[0].id) {
    switch (user.roles[0].id) {
      case 1:
        return <Navigate to={"/candidato"} replace />;
      case 2:
        return <Navigate to={"/aplicador"} replace />;
      default:
        return <Navigate to={"/candidato"} replace />;
    }
  } else {
    return (
      <div className="w-full min-h-screen bg-Blue flex justify-center items-center">
        <Outlet />
      </div>
    );
  }
}

export default LoginLayout;
