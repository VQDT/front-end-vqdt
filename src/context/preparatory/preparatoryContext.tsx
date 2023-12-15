import { createContext, ReactNode, useEffect, useState } from "react";
import useAuth from "../auth/useAuth";
import instance from "../../axios";
import { CourseDay } from "../../models";

interface PreparatoryProviderProps {
  children: ReactNode;
}

interface PreparatoryContextProps {
  CourseDays : CourseDay[] | undefined;
  getPreparatoryCourseDays : (id:string) => void;
}

const PreparatoryContext = createContext<PreparatoryContextProps | null>(null);

function PreparatoryProvider({ children }: PreparatoryProviderProps) {

  const { user, roles, currentRole } = useAuth();
  const [ CourseDays, setCouseDays ] = useState<CourseDay[]>([]);
  
  useEffect(() => {
    if(user){
      getPreparatoryCourseDays(user.id)
      //console.log(CourseDays)
    }
  },[])

  async function getPreparatoryCourseDays(applicatorId: string) {
    if (roles && currentRole){
      const url = `/courseDays/applicator/`+applicatorId;
      const response = await instance.get(url);
      setCouseDays(response.data);
    }
  }

  return(
      <PreparatoryContext.Provider value={{ CourseDays, getPreparatoryCourseDays }}>
        { children }
      </PreparatoryContext.Provider>
  );
}

export {
    PreparatoryContext,
    PreparatoryProvider
}