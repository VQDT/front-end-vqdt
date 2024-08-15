import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQuestion } from "../../context/question/useQuestionContext";
import Tiptap from "../../components/TipTapEditor";
import { JSONContent } from "@tiptap/react";

export const ReviewQuestion = () => { 
    const { state } = useLocation();
    const { getQuestionById, questionRequest } = useQuestion();

    useEffect(() => {
        getQuestionById(state.questionId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.id]);

    console.log(questionRequest.content);

    return (
      <div>
        <Tiptap
            reviewerMode={true}
            originalContent={questionRequest.content as unknown as JSONContent} 
        />
      </div>
    );
}