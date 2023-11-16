import { TestAttendance } from "./TestAttendance";
import { classroom } from "./Classroom";

export interface Test {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  dateStart: string;
  timeStart: string;
  timeEnd: string;
  written: boolean;
  numberQuestion: number;
  idApplicator: string;
  idCreator: string;
  idClassroom: string;
  classroom: classroom;
  questionId: string | null;
  miliseconds: number;
  testAttendances: TestAttendance[]
}