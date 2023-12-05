import instance from "../../axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Role, sessionUser, User } from "../../models";
import {
  deleteTokenSessinStorage,
  deleteUserSessionStorage,
  getTokenSessionStorage,
  getUserSessionStorage,
  saveTokenSessinStorage,
  saveUserSessionStorage,
} from "./utils";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  user: User | undefined;
  roles: Role[] | undefined;
  setCurrentRole: (value: string) => void;
  login: (cpf: string, password: string) => Promise<void>;
  loggout: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [roles, setRoles] = useState<Role[] | undefined>(undefined);

  useEffect(() => {
    const existUser = getUserSessionStorage();
    const existToken = getTokenSessionStorage();
    getUserRoles();
    if (existUser && existToken) {
      setUser(JSON.parse(existUser));
    }
  }, []);

  async function login(cpf: string, password: string) {
    const response = await instance.post("users/auth/login", { cpf, password });
    if (response.status === 200) {
      const data = await response.data;
      setUser(data.user);
      const {
        cpf,
        email,
        firstName,
        gender,
        id,
        idAddress,
        lastName,
        occupation,
        phone,
        race,
      }: sessionUser = data.user;
      const sessionUser: sessionUser = {
        cpf,
        email,
        firstName,
        gender,
        id,
        idAddress,
        lastName,
        occupation,
        phone,
        race,
      };
      saveTokenSessinStorage(data.token);
      saveUserSessionStorage(sessionUser);
    }
  }

  async function getUserRoles(): Promise<Role[] | undefined> {
    try {
      await instance.get("users/user/roles").then(
        response => {
          setRoles(response.data.roles)
        }
      );
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      return [];
    }
  }

  function setCurrentRole(value: string){
    if (roles){
      let currentRole:Role = {id:0, name:''};
      roles.map(role => {
        if(role.name === value){
          currentRole = role;
          roles.splice(roles.indexOf(role), 1)
        }
      })
      roles.unshift(currentRole)
      console.log(roles)
      setRoles(roles)
    }
  }
  
  function loggout() {
    deleteTokenSessinStorage();
    deleteUserSessionStorage();
    setUser(undefined);
  }

  return (
    <AuthContext.Provider value={{ user, login, loggout, roles, setCurrentRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
