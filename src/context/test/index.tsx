import instance from "../../axios";
import { createContext, ReactNode , useState } from "react";
import { Test } from "../../types";

interface TestProviderProps {
  children: ReactNode;
}

interface TestContextProps {
  tests: Test[] | undefined;
  ActualTest: Test | undefined;
  loadTests: (id: string) => Promise<void>;
  loadActualTest: (id: string) => Promise<void>;
}

const TestContext = createContext<TestContextProps>({} as TestContextProps);

function TestProvider({ children }: TestProviderProps) {

    const [ tests, setTests ] = useState<Test[] | undefined>(undefined);
    const [ ActualTest, setActualTest ] = useState<Test | undefined>(undefined);

    async function loadTests(id: string){
        const response = await instance.get(`users/${id}/tests`);
        if(response.status === 200) {
          const data = await response.data;
          console.log(data);
          setTests(data);
        }
    }

    async function loadActualTest(id: string | undefined){
        const response = await instance.get(`tests/${id}`)
        if(response.status === 200) {
          const data = await response.data;
          console.log(data)
          setActualTest(data)
        }
    }

    return(
        <TestContext.Provider value={{ tests, loadTests, ActualTest, loadActualTest }}>
          { children }
        </TestContext.Provider>
    );
}


export {
    TestContext,
    TestProvider
}