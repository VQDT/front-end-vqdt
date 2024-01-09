import instance from "../../axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import {
  deleteTokenSessinStorage,
  deleteUserSessionStorage,
  getTokenSessionStorage,
  getUserSessionStorage,
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
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserOutput | undefined>();
  const [currentRole, setCurrentRole] = useState<Role | undefined>();

  useEffect(() => {
    const existUser = getUserSessionStorage();
    const existToken = getTokenSessionStorage();
    if (existUser && existToken) {
      setUser(JSON.parse(existUser));
    }
  }, []);

  async function login(cpf: string, password: string) {
    const response = await instance.post("/auth/login", { cpf, password });
    if (response.status === 200) {
      const { user, token } = await response.data;
      setUser(user);
      setCurrentRole(user.roles[0]);
      saveTokenSessinStorage(token);
      saveUserSessionStorage(user);
    }
  }

  function loggout() {
    deleteTokenSessinStorage();
    deleteUserSessionStorage();
    setUser(undefined);
  }

  function changeCurrentRole(role: Role) {
    setCurrentRole(role);
  }

  return (
    <AuthContext.Provider value={{ user, login, loggout, currentRole, changeCurrentRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
