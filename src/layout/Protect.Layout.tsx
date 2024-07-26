import { Navigate, Outlet } from "react-router-dom";
import "./style.css";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { UserOutput } from "../models/User";

interface ProtectLayoutProps {
  permittedRoles?: string[];
}

function ProtectLayout(props: ProtectLayoutProps) {
  const { roles } = useAuthUser() as UserOutput;

  if (props.permittedRoles) {
    if (!roles.some((role) => props.permittedRoles?.includes(role))) {
      return <Navigate to={"/"} replace />;
    }
  }

  return <Outlet />;
}

export default ProtectLayout;
