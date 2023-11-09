import { TestAttendance } from "./TestAttendance";
import { classroom } from "./classroom";

export interface Test {
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