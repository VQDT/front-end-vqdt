import { Alternative } from "./Alternative";
import { ContentAux } from "./ContentAux";	

export interface Question {
    id: string;
    type: string;
    isCorrect?: boolean;
    skill: string;
    competence: string;
    knowledgeArea: string;
    knowledgeLevel: number;
    difficulty: string;
    review: string;
    idCreator: string;
    idReviewer: string;
    alternatives: Alternative[]
    ContentAux: ContentAux[];
}

export type Answer = {
    idQuestion: string;
    idAlternatives: string;
}