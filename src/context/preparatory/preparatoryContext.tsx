import { createContext, ReactNode, useEffect, useState } from "react";
import useAuth from "../auth/useAuth";
import instance from "../../axios";
import { CourseAttendance, CourseDay } from "../../models";

interface PreparatoryProviderProps {
  children: ReactNode;
}

interface PreparatoryContextProps {
  CourseDays : CourseDay[] | undefined;
  courseCandidates: CourseAttendance[] | undefined;
  getPreparatoryCourseDays : (id:string) => void;
  getCourseCandidates: (id:string) => void;
  updateCourseAttendance: (presents : CourseAttendance[], courseId : string) => Promise<boolean>;
  updateCandidateList: (id : string) => void;
}

const PreparatoryContext = createContext<PreparatoryContextProps | null>(null);

function PreparatoryProvider({ children }: PreparatoryProviderProps) {

  const { user, roles, currentRole } = useAuth();
  const [ CourseDays, setCouseDays ] = useState<CourseDay[]>([]);
  const [ courseCandidates, setCourseCandidates ] = useState<CourseAttendance[]| undefined>(undefined);

  async function getPreparatoryCourseDays(applicatorId: string) {
    if (roles && currentRole){
      const url = `/courseDays/applicator/`+applicatorId;
      const response = await instance.get(url);
      setCouseDays(response.data);
    }
  }

  async function getCourseCandidates(courseDayId: string){
    if (roles && currentRole){
      const url = `/users/courseDay/`+courseDayId;
      const response = await instance.get(url);
      setCourseCandidates(response.data);
    }
  }

  async function updateCourseAttendance(presents: CourseAttendance[], courseDayId: string){
    const url = `/courseAttendances/presence/`;
    try{
      presents.map(async (elem) => {
        const userId = elem.user.id;
        await instance.put(url, { userId, courseDayId })
      })
      return true
    }
    catch (error) {
      console.error(error);
      return false;
    }
  }

  function updateCandidateList(id : string){
    if(courseCandidates){
      const newList = courseCandidates.map(elem => {
        if(elem.user.id === id) {
          elem.presence = !elem.presence
        }
        console.log(elem)
        return elem;
      })
      setCourseCandidates(newList)
    }
  }

  useEffect(() => {
    if(user){
      getPreparatoryCourseDays(user.id)
    }
  },[])

  return(
      <PreparatoryContext.Provider value={{ courseCandidates, CourseDays, getPreparatoryCourseDays, getCourseCandidates, updateCourseAttendance, updateCandidateList }}>
        { children }
      </PreparatoryContext.Provider>
  );
}

export {
    PreparatoryContext,
    PreparatoryProvider
}