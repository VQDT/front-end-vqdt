import { ReactNode } from "react"
import useAuth from "../../context/auth/useAuth";
import Login from "../../pages/Login";

interface LayoutProtectProps {
  children: ReactNode;
}

function LayoutProtect({ children }: LayoutProtectProps) {
  
  const { user } = useAuth();

  if(user) {
    return children;
  }

  return <Login />;

}

export default LayoutProtect;