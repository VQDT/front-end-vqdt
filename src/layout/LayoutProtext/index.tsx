import { ReactNode } from "react"
import Login from "../../pages/Login";
import useAuthContext from "../../context/auth/useAuthContext";

interface LayoutProtectProps {
  children: ReactNode;
}

function LayoutProtect({ children }: LayoutProtectProps) {
  
  const { user } = useAuthContext();

  if(user) {
    return children;
  }

  return <Login />;

}

export default LayoutProtect;