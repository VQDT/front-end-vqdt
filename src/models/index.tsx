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
  classroom: classroom;
  questionId: string | null;
  testAttendances: TestAttendance[]
}

type TestAttendance = {
  approved: boolean,
  score: number
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

export type sessionUser = {
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
}

type classroom = {
  id: string,
  name:string,
  idSchool: string,
  schools: School
}

type School = {
  id: string,
  name:string,
  idGee: number,
  idAddress: string,
  address: Address
}

type Address = {
    id: string,
    street: string,
    neighbour: string,
    city: string,
    state: string,
    zipCode: string
}