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
  currentRole: Role | undefined;
  login: (cpf: string, password: string) => Promise<void>;
  loggout: () => void;
  changeCurrentRole: (role: Role) => void;
  checkRolePermission : (roleId: number) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps) {

  const [user, setUser] = useState<UserOutput | undefined>();
  const [currentRole, setCurrentRole] = useState<Role | undefined>();

  useEffect(() => {
    const existUser = getUserSessionStorage();
    const existToken = getTokenSessionStorage();
    const existCurrentRole = getCurrentRoleSessionStorage();
    if (existUser && existToken && existCurrentRole) {
      setUser(JSON.parse(existUser));
      setCurrentRole(JSON.parse(existCurrentRole));
    }
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
    if (response.status === 200) {
      return true;
    }
    return false;
  }

  return (
    <AuthContext.Provider value={{ user, currentRole, login, loggout, changeCurrentRole, checkRolePermission }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };