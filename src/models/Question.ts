export interface Question {
    id: string;
    type: string;
    skill: string;
    competence: string;
    knowledgeArea: string;
    knowledgeLevel: number;
    difficulty: string;
    text: string;
    asking: string;
    review: string;
    idCreator: string;
    idReviewer: string;
    alternatives: alternative[]
}

export type alternative = {
    id: string;
    content: string;
    correct: boolean;
    idQuestion: string;
}

export type answer = {
    idQuestion: string;
    idAlternatives: string;
}