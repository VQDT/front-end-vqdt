import { useContext } from "react";
import { QuestionContext } from "./questionContext";

export function useQuestion() {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error("useQuestion must be used within a QuestionProvider");
  }
  return context;
}