import instance from "../../axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { User } from "../../types";
import { deleteTokenSessinStorage, deleteUserSessionStorage, getUserSessionStorage, saveTokenSessinStorage, saveUserSessionStorage } from "./utils";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  user: User | undefined;
  login: (cpf: string, password: string) => Promise<void>;
  loggout: () => void;
}


const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps) {

  const [ user, setUser ] = useState<User | undefined>(undefined);

  useEffect(() => {
    const existUser = getUserSessionStorage();
    if(existUser) {
      setUser(JSON.parse(existUser));
    }
  }, [])

  async function login(cpf: string, password: string){
    const response = await instance.post("users/auth/login", {cpf, password});
    if(response.status === 200) {
      const data = await response.data;
      setUser(data.user);
      saveTokenSessinStorage(data.token);
      saveUserSessionStorage(data.user);
    }
  }

  function loggout(){
    deleteTokenSessinStorage();
    deleteUserSessionStorage();
    setUser(undefined);
  }

  return(
    <AuthContext.Provider value={{ user, login, loggout }}>
      { children }
    </AuthContext.Provider>
  );

}

export {
  AuthContext,
  AuthProvider
}