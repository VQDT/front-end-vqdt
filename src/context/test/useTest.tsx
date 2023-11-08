import { useContext } from "react";
import { TestContext } from "./testContext";

function useTestContext() {

  const testContext = useContext(TestContext);
  if(!testContext) {
    throw new Error("No Test context")
  }
  return testContext;
}

export default useTestContext;