import { useContext } from "react";
<<<<<<<< HEAD:src/context/auth/useAuth.tsx
import { AuthContext } from "./authContext";
========
import { AuthContext } from ".";
>>>>>>>> development:src/context/auth/useAuthContext.tsx

function useAuth() {

  const authContext = useContext(AuthContext);
  if(!authContext) {
    throw new Error("No auth context")
  }
  return authContext;
}

export default useAuth;