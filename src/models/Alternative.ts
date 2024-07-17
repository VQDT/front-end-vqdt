export interface Alternative {
    id: string;
    content: string;
    correct: boolean;
    idQuestion: string;
}

export interface AlternativeRequest {
  content: string;
  correct: boolean;
}