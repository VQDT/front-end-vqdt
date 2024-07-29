import { useNavigate } from "react-router-dom";
import { useAPI } from "../axios";
import useTest from "../context/test/useTest";
import { Question, Answer } from "../models/Question";
import { Test } from "../models/Test";

export function useCandidate() {
    const instance = useAPI();
    const navigation = useNavigate();
    const { setScoreAndStatus } = useTest();

    const calculateResult = async (test: Test, answers: Answer[], questions: Question[]) => {
        let score = 0;
        let status = false;
        answers.map((item) => {
            questions
                .find((q) => q.id === item.idQuestion)
                ?.alternatives.find((a) => a.id === item.idAlternatives)?.correct ===
                true && score++;
        });
        if (score >= test.numberQuestion / 2) {
            status = true;
        }
        setScoreAndStatus(test.id, score, status);
        navigation("/comprovante-de-participacao/" + test.id);
    };

    const checkPassword = async (cpf: string, password: string) => { 
        try {
            const response = await instance.post("/users/checkPassword", {
                cpf,
                password,
            });
            
            if (response.status === 200) {
                console.log(response.data);
                return true;
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    
    return { calculateResult, checkPassword };
}