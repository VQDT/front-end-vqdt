import { useContext } from "react";
import { AuthContext } from "../context/auth";

function useAuthContext() {

  const authContext = useContext(AuthContext);
  if(!authContext) {
    throw new Error("No auth context")
  }
  return authContext;
}

export default useAuthContext;