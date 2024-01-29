import instance from "../../axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import {
  deleteCurrentRoleSessionStorage,
  deleteTokenSessinStorage,
  deleteUserSessionStorage,
  getCurrentRoleSessionStorage,
  getTokenSessionStorage,
  getUserSessionStorage,
  saveCurrentRoleSessionStorage,
  saveTokenSessinStorage,
  saveUserSessionStorage,
} from "./utils";
import { UserOutput, Role } from "../../models/User";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  user: UserOutput | undefined;
  onLoading: boolean;
  error: boolean;
  currentRole: Role | undefined;
  setError: (error: boolean) => void;
  login: (cpf: string, password: string) => Promise<void>;
  loggout: () => void;
  changeCurrentRole: (role: Role) => void;
  checkRolePermission : (roleId: number) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps) {

  const [user, setUser] = useState<UserOutput | undefined>(undefined);
  const [currentRole, setCurrentRole] = useState<Role | undefined>(undefined)
  const [onLoading, setOnLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setOnLoading(true)
    const existUser = getUserSessionStorage();
    const existToken = getTokenSessionStorage();
    const existCurrentRole = getCurrentRoleSessionStorage();
    if (existUser && existToken && existCurrentRole) {
      setUser(JSON.parse(existUser));
      setCurrentRole(JSON.parse(existCurrentRole));
    }
    setTimeout(() => {
      setOnLoading(false);
    }, 1000);
    
  }, []);

  async function login(cpf: string, password: string) {
    const response = await instance.post("users/auth/login", { cpf, password });
    if (response.status === 200) {
      const { user, token } = await response.data;
      setUser(user);
      setCurrentRole(user.roles[0]);
      saveTokenSessinStorage(token);
      saveUserSessionStorage(user);
      saveCurrentRoleSessionStorage(user.roles[0]);
    }
  }

  function loggout() {
    deleteTokenSessinStorage();
    deleteUserSessionStorage();
    deleteCurrentRoleSessionStorage();
    setUser(undefined);
  }

  function changeCurrentRole(role: Role) {
    setCurrentRole(role);
    saveCurrentRoleSessionStorage(role);
  }

  async function checkRolePermission(roleId: number) {
    const response = await instance.get("users/auth/role/" + roleId);
    if(response.status === 200){
      return response.data;
    }
  }

  return (
    <AuthContext.Provider value={{ error, user, onLoading, currentRole, login, loggout, changeCurrentRole, checkRolePermission, setError }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };