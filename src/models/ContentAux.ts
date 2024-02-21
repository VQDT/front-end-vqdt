export interface ContentAux {
  id: string;
  type: string;
  content: TypeContentAux;
  order: number;
  idQuestion: string;
}

export type TypeContentAux = "asking" | "paragraph" | "text" | "image" | "ref" | "title";

export interface CreateContentAux {
  type: TypeContentAux;
  content: string;
}