import { createContext, ReactNode , useEffect, useState } from "react";
import useAuth from "../auth/useAuth";
import { Test } from "../../models/Test";
import instance from "../../axios";
import { Question } from "../../models/Question";

interface TestProviderProps {
  children: ReactNode;
}

interface TestContextProps {
  tests: Test[];
  test: Test | null;
  questions: Question[];
  getTest: (id: string) => void;
  getQuestions: (id: string) => void;
  removeTestAttendance: (id :string) => Promise<boolean>;
  setScoreAndStatus : (id :string, score: number , status: boolean) => void;
}

const TestContext = createContext<TestContextProps>({} as TestContextProps);

function TestProvider({ children }: TestProviderProps) {

  const { user } = useAuth();
  const [ tests, setTests ] = useState<Test[]>([]);
  const [ test, setTest ] = useState<Test | null >(null);
  const [ questions, setQuestions] = useState<Question[]>([]);

  async function getTests() {
    const url = `/tests/`;
    const response = await instance.get(url);
    setTests(response.data);
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
    const response = await instance.get(url);
    setQuestions(response.data);
  }

  async function setScoreAndStatus(testId: string, score : number, status : boolean){
    const url = `/testAttendance/result/`;
    const response = await instance.put(url, { testId, score, status });
    console.log(response.data);
  }

  useEffect(() => {
    if(user) {
      getTests();
    }
  }, [ user ]);

  return(
      <TestContext.Provider value={{ tests, test, getTest, removeTestAttendance, getQuestions, questions, setScoreAndStatus }}>
        { children }
      </TestContext.Provider>
  );
}

export {
    TestContext,
    TestProvider
}