import { useContext } from "react";
import { PreparatoryContext } from "./preparatoryContext";

function usePreparatory() {

  const preparatoryContext = useContext(PreparatoryContext);
  if(!preparatoryContext) {
    throw new Error("No Preparatory context")
  }
  return preparatoryContext;
}

export default usePreparatory;