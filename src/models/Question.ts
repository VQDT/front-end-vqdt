import { Alternative, AlternativeRequest } from "./Alternative";
import { ContentAuxResponse } from "./ContentAux";

export interface Question {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  type: string;
  isCorrect?: boolean;
  status: QuestionStatus;
  skill: string;
  competence: string;
  knowledgeArea: string;
  knowledgeLevel: number;
  difficulty: string;
  review: string;
  idCreator: string;
  idReviewer: string;
  alternatives: Alternative[]
  content: ContentAuxResponse[];
}

export type Answer = {
  idQuestion: string;
  idAlternatives: string;
}

export type QuestionLevel = "INFANTIL" | "FUNDAMENTAL" | "MEDIO";
export type QuestionArea = "LINGUAGENS" | "MATEMATICA" | "CIENCIAS_HUMANAS" | "CIENCIAS_NATUREZA";
export type QuestionDifficulty = "1" | "2" | "3" | "default";
export type QuestionType = "multiple-choice" | "true-or-false";
export type QuestionStatus = "APROVADA" | "REJEITADA" | "EM_ANALISE" | "RASCUNHO" | "PENDENTE";
//converta o QuestionArea para um enum
export enum QuestionAreaEnum {
  LINGUAGENS = "Linguagens",
  MATEMATICA = "Matemática",
  CIENCIAS_HUMANAS = "Ciências Humanas",
  CIENCIAS_NATUREZA = "Ciências da Natureza",
  HISTORIA = "Historia"
}

export enum QuestionStatusEnum {
  APPROVED = "APROVADA",
  REJECTED = "REJEITADA",
  UNDER_REVIEW = "EM ANÁLISE",
  DRAFT = "RASCUNHO",
  PENDENT = "PENDENTE"
}

export interface QuestionRequest {
  content: string;
  knowledgeLevel: QuestionLevel;
  knowledgeArea: QuestionArea;
  difficulty: QuestionDifficulty;
  skill: string;
  competence: string;
  alternatives: AlternativeRequest[];
  type: QuestionType;
  isCorrect?: boolean;
}