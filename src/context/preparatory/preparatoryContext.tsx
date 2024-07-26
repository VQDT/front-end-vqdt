import { createContext, ReactNode, useCallback, useState } from "react";
import instance from "../../axios";
import { CourseAttendance, CourseDay } from "../../models/Course";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

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
  const authHeader = useAuthHeader();
  const [ CourseDays, setCouseDays ] = useState<CourseDay[]>([]);
  const [ courseCandidates, setCourseCandidates ] = useState<CourseAttendance[]| undefined>(undefined);
  
  const getPreparatoryCourseDays = useCallback(async (applicatorId: string) => {
      const url = `/courseDays/applicator/`+applicatorId;
    const response = await instance.get(url, {
      headers: {
        Authorization: authHeader,
      },
    });
      setCouseDays(response.data);
  }, [authHeader, setCouseDays]);

  async function getCourseCandidates(courseDayId: string){
      const url = `/users/courseDay/`+courseDayId;
    const response = await instance.get(url, {
      headers: {
        Authorization: authHeader,
      },
    });
      setCourseCandidates(response.data);
  }

  async function updateCourseAttendance(presents: CourseAttendance[], courseDayId: string){
    const url = `/courseAttendances/presence/`;
    try{
      presents.map(async (elem) => {
        const userId = elem.user.id;
        await instance.put(url, {
          headers: {
            Authorization: authHeader,
          },
          userId,
          courseDayId
        })
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