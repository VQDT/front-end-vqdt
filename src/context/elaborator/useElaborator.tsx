import { useContext } from "react";
import { ElaboratorContext } from "./elaboratorContext";

function useElaborator() {

  const elaboratorContext = useContext(ElaboratorContext);
  if(!elaboratorContext) {
    throw new Error("No elaborator context")
  }
  return elaboratorContext;
}

export default useElaborator;