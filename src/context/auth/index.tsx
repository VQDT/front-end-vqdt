import instance from "../../axios";
import { createContext, ReactNode, useState } from "react";
import { User } from "../../types";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  user: User | undefined;
  login: (cpf: string, password: string) => Promise<void>;
}


const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps) {

  const [ user, setUser ] = useState<User | undefined>(undefined);

  async function login(cpf: string, password: string){
    const response = await instance.post("./auth/login", { cpf, password});
    if(response.status === 200) {
      const data = await response.data;
      setUser(data.user);
      sessionStorage.setItem("token", data.token);
    }
  }

  return(
    <AuthContext.Provider value={{ user, login }}>
      { children }
    </AuthContext.Provider>
  );

}

export {
  AuthContext,
  AuthProvider
}