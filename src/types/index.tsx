export type Test = {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  dateStart: Date;
  timeStart: Date;
  timeEnd: Date;
  written: boolean;
  numberQuestion: number;
  idApplicator: string;
  idCreator: string;
  idClassroom: string;
  questionId: string | null;
  score: number;
}

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  cpf: string;
  email: string;
  gender: string;
  race: string;
  phone: string;
  occupation: string;
  idAddress: string;
  password?: string;
}