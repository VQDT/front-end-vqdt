import { useContext } from "react";
import { TestContext } from "./testContext";

function useTest() {

  const testContext = useContext(TestContext);
  if(!testContext) {
    throw new Error("No Test context")
  }
  return testContext;
}

export default useTest;