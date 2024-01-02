import { createContext, ReactNode, useEffect, useState } from "react";
import useAuth from "../auth/useAuth";
import instance from "../../axios";
import { CourseDay, User } from "../../models";

interface PreparatoryProviderProps {
  children: ReactNode;
}

interface PreparatoryContextProps {
  CourseDays : CourseDay[] | undefined;
  courseCandidates: {user:User}[] | undefined;
  getPreparatoryCourseDays : (id:string) => void;
  getCourseCandidates: (id:string) => void;
  updateCourseAttendance: (presents : string[], courseId : string) => void;
}

const PreparatoryContext = createContext<PreparatoryContextProps | null>(null);

function PreparatoryProvider({ children }: PreparatoryProviderProps) {

  const { user, roles, currentRole } = useAuth();
  const [ CourseDays, setCouseDays ] = useState<CourseDay[]>([]);
  const [ courseCandidates, setCourseCandidates ] = useState<{user:User}[]| undefined>(undefined);
  
  useEffect(() => {
    if(user){
      getPreparatoryCourseDays(user.id)
    }
  },[])

  async function getPreparatoryCourseDays(applicatorId: string) {
    if (roles && currentRole){
      const url = `/courseDays/applicator/`+applicatorId;
      const response = await instance.get(url);
      setCouseDays(response.data);
    }
  }

  async function getCourseCandidates(courseId: string){
    if (roles && currentRole){
      const url = `/users/course/`+courseId;
      const response = await instance.get(url);
      setCourseCandidates(response.data);
    }
  }

  async function updateCourseAttendance(presents: string[], courseDayId: string){
    const url = `/courseAttendances/presence/`;
    presents.map(async (userId) => {
      const response = await instance.put(url, { userId, courseDayId })
      console.log(response.data);
    })
  }

  return(
      <PreparatoryContext.Provider value={{ courseCandidates, CourseDays, getPreparatoryCourseDays, getCourseCandidates, updateCourseAttendance }}>
        { children }
      </PreparatoryContext.Provider>
  );
}

export {
    PreparatoryContext,
    PreparatoryProvider
}