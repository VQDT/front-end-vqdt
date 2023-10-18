import instance from "../../axios";
import { createContext, ReactNode , useState } from "react";
import { Test } from "../../types";

interface TestProviderProps {
  children: ReactNode;
}

interface TestContextProps {
  tests: Test[] | undefined;
  loadTests: (id: string) => Promise<void>;
}

const TestContext = createContext<TestContextProps>({} as TestContextProps);

function TestProvider({ children }: TestProviderProps) {

    const [ tests, setTests ] = useState<Test[] | undefined>(undefined);

    async function loadTests(id: string){
        const response = await instance.get(`users/${id}/tests`);
        if(response.status === 200) {
          const data = await response.data;
          setTests(data);
        }
    }

    return(
        <TestContext.Provider value={{ tests, loadTests }}>
          { children }
        </TestContext.Provider>
    );
}


export {
    TestContext,
    TestProvider
}