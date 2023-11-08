import { Navigate } from "react-router-dom";
import useAuth from "../context/auth/useAuth"

interface ProtectLayoutProps {
  children: React.ReactNode;
}

function ProtectLayout(props: ProtectLayoutProps) {
  const { user } = useAuth();
  return user ? props.children : <Navigate to={"/auth"} replace/>;
}

export default ProtectLayout;