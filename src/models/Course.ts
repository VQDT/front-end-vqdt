import { UserOutput } from "./User"

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
    title: string,
    frequencyFinished: boolean,
    timeStart: string,
    timeEnd: string,
    idCourse: string
    course: Course
    isFinished: boolean
}

export type CourseAttendance = {
    id: string,
    presence: boolean,
    user: UserOutput,
    idCourseDay: string,
    idCandidate: string
}