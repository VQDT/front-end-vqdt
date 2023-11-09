import { useContext } from "react";
import { AuthContext } from "./authContext";

function useAuth() {

  const authContext = useContext(AuthContext);
  if(!authContext) {
    throw new Error("No auth context")
  }
  return authContext;
}

export default useAuth;