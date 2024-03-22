export interface ContentAux {
  id: string;
  type: TypeContentAux;
  content:  string | File;
  order: number;
  idQuestion: string;
}

export interface ContentAuxRequest {
  type: TypeContentAux;
  content: string | File;
  order: number;
}

export type TypeContentAux = "asking" | "paragraph" | "text" | "image" | "ref" | "title";

export interface CreateContentAux {
  type: TypeContentAux;
  content: string | File;
}