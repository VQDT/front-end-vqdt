import { createContext, ReactNode, useEffect, useState } from "react";
import useAuth from "../auth/useAuth";
import instance from "../../axios";
import { Question } from "../../models/Question";
import { UserOutput } from "../../models/User";

interface ElaboratorProviderProps {
  children: ReactNode;
}

interface ElaboratorContextProps {
  myQuestions: Question[];
  getQuestions: (user: UserOutput) => void;
}

const ElaboratorContext = createContext<ElaboratorContextProps | null>(null);

function ElaboratorProvider({ children }: ElaboratorProviderProps) {

  const { user } = useAuth();

  const [ myQuestions, setMyQuestions ] = useState<Question[]>([]);

  async function getQuestions(user: UserOutput) {
    const response = await instance.get("/questions/elaborator/"+user.id);
    if (response.status === 200) {
      const questions = await response.data;
      console.log(questions)
      setMyQuestions(questions);
    }
  }

  useEffect(() => {
    if(user){
      getQuestions(user)
    }
  }, []);

  return (
    <ElaboratorContext.Provider value={{ myQuestions, getQuestions }}>
      {children}
    </ElaboratorContext.Provider>
  );
}

export { ElaboratorContext, ElaboratorProvider };