import instance from "../../axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { sessionUser, User } from "../../models";
import { deleteTokenSessinStorage, deleteUserSessionStorage, getTokenSessionStorage, getUserSessionStorage, saveTokenSessinStorage, saveUserSessionStorage } from "./utils";

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
    const userRoles = getUserRoles();
    const existToken = getTokenSessionStorage();
    if(existUser && existToken) {
      const userWithRoles = {
        ...JSON.parse(existUser),
        roles: userRoles
      }
      setUser(userWithRoles);
    }
  }, [])

  async function login(cpf: string, password: string){
    const response = await instance.post("users/auth/login", {cpf, password});
    if(response.status === 200) {
      const data = await response.data;
      setUser(data.user);
      const { cpf, email, firstName, gender, id, idAddress, lastName, occupation, phone, race }: sessionUser = data.user
      const sessionUser:sessionUser = { cpf, email, firstName, gender, id, idAddress, lastName, occupation, phone, race }
      saveTokenSessinStorage(data.token);
      saveUserSessionStorage(sessionUser);
    }
  }

  async function getUserRoles(){
    const response = await instance.get("users/user/roles");
    if(response.status === 200) {
      const data = await response.data;
      return data.roles;
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