import { createContext, ReactNode , useEffect, useState } from "react";
import useAuth from "../auth/useAuth";
import { Test } from "../../models/Test";
import instance from "../../axios";
import { Question } from "../../models/Question";
import { TestAttendance } from "../../models/TestAttendance";
import { User } from "../../models";

interface TestProviderProps {
  children: ReactNode;
}

interface TestContextProps {
  tests: Test[];
  test: Test | null;
  questions: Question[];
  testAttendance: TestAttendance | null
  candidates: User[] | undefined;
  getTest: (id: string) => void;
  getQuestions: (id: string) => void;
  removeTestAttendance: (id :string) => Promise<boolean>;
  getTestAttendance: (id: string) => void;
  getCandidates: (id: string) => void;
  setScoreAndStatus : (id :string, score: number , status: boolean) => void;
  updateAttendance : (attendances : string[], testId : string) => void;
}

const TestContext = createContext<TestContextProps | null>(null);

function TestProvider({ children }: TestProviderProps) {

  const { user, roles, currentRole } = useAuth();
  const [ tests, setTests ] = useState<Test[]>([]);
  const [ test, setTest ] = useState<Test | null >(null);
  const [ questions, setQuestions ] = useState<Question[]>([]);
  const [ testAttendance, setTestAttendance ] = useState<TestAttendance | null>(null)
  const [ candidates, setCandidates ] = useState<User[]| undefined>(undefined)

  async function getTests() {
    if (roles && currentRole){
      let url = `/tests`;

      if (currentRole.name === "Aplicador"){
        url = `/tests/applicator`;
      }

      const response = await instance.get(url);
      
      setTests(response.data);
    }
  }

  async function getTest(id: string) {
    const url = `/tests/test/` + id;
    const response = await instance.get(url);
    setTest(response.data);
  }

  async function removeTestAttendance(id: string) {
    const url = `/testAttendance/` + id;
    const response = await instance.delete(url);
    if (response.status === 200){
      return true;
    }
    return false;
  }

  async function getQuestions(id : string) {
    const url = `/questions/test/` + id;
    
    try {
      const response = await instance.get(url);
      if(response.status === 200){
        const data = await response.data;
        setQuestions(data);
      }

    } catch(error) {
      if( error instanceof Error) console.log(error.message); 
      console.log("Erro desconhecido");
    }
  }

  async function getTestAttendance(id : string) {
    const url = `/testAttendance/` + id;
    const response = await instance.get(url);
    if (response.status === 200) {
      setTestAttendance(response.data);
    }
  }

  async function setScoreAndStatus(testId: string, score : number, status : boolean){
    const url = `/testAttendance/result/`;
    const response = await instance.put(url, { testId, score, status });
    console.log(response.data);
  }

  async function getCandidates(id : string) {
    const url = `/users/candidates/`+id
    const response = await instance.get(url);
    setCandidates(response.data);
  }

  async function updateAttendance(attendances : string[], testId : string){
    const url = `/testAttendance/presence/`;
    attendances.map(async (userId) => {
      const response = await instance.put(url, { userId, testId })
      console.log(response.data);
    })
  }

  useEffect(() => {
    if(user && roles) {
      getTests();
    }
  }, [user, currentRole, testAttendance]);

  return(
      <TestContext.Provider value={{ candidates, questions, tests, test, testAttendance, updateAttendance, getCandidates, getTest, removeTestAttendance, getQuestions, setScoreAndStatus, getTestAttendance }}>
        { children }
      </TestContext.Provider>
  );
}

export {
    TestContext,
    TestProvider
}