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
  score: number,
  presence: boolean
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
  testAttendances: TestAttendance[]
}

export type Role = {
  id: number;
  name: string
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

export type Course = {
  id: string, 
  numberDays: string,
  idSchool: string,
  idApplicator: string,
  idCreator: string,
  school: string,
  applicator: string,
  title: string,
  creator: string
}

export type CourseDay = {
  id: string, 
  timeStart: string,
  timeEnd: string,
  idCourse: string
  course: Course
}

export type CourseAttendance = {
  id: string,
  presence: string,
  idCourseDay: string,
  idCandidate: string
}