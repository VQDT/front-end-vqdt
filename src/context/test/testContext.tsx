import { createContext, ReactNode , useEffect, useState } from "react";
import useAuth from "../auth/useAuth";
import { Test } from "../../models/Test";
import instance from "../../axios";

interface TestProviderProps {
  children: ReactNode;
}

interface TestContextProps {
  tests: Test[];
  test: Test | null;
  getTest: (id: string) => void;
  removeTestAttendance: () => void;
}

const TestContext = createContext<TestContextProps>({} as TestContextProps);

function TestProvider({ children }: TestProviderProps) {

  const { user } = useAuth();
  const [ tests, setTests ] = useState<Test[]>([]);
  const [ test, setTest ] = useState<Test | null >(null);

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

  async function removeTestAttendance() {
    const url = `/tests/` + user?.id;
    const response = await instance.delete(url);
    console.log(response);
  }

  useEffect(() => {
    if(user) {
      getTests();
    }
  }, [ user ]);

  return(
      <TestContext.Provider value={{ tests, test, getTest, removeTestAttendance }}>
        { children }
      </TestContext.Provider>
  );
}


export {
    TestContext,
    TestProvider
}