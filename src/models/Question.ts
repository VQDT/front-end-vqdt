import { Alternative, AlternativeRequest } from "./Alternative";
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

export type QuestionLevel = "INFANTIL" | "FUNDAMENTAL" | "MEDIO";
export type QuestionArea = "LINGUAGENS" | "MATEMATICA" | "CIENCIAS_HUMANAS" | "CIENCIAS_NATUREZA";
export type QuestionDifficulty = "1" | "2" | "3";
export type QuestionType = "multiple-choice" | "true-or-false";

export interface ContentAuxRequest {
  type: string;
  content: string | File;
  order: number;
}

export interface QuestionRequest {
  level: QuestionLevel;
  area: QuestionArea;
  difficulty: QuestionDifficulty;
  skill: string;
  competence: string;
  alternatives: AlternativeRequest[];
  contentAux: ContentAuxRequest[];
  type: QuestionType;
  isCorrect?: boolean;
}