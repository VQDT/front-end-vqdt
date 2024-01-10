//import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import ListCard from "../../components/ListCard";
import TestCard from "../../components/TestCard";
import Main from "../../components/Main";
import {
  AiOutlineCalendar,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import isFuture from "../../utils/isFuture";
import useAuth from "../../context/auth/useAuth";
import { ReactElement, useEffect } from "react";
import usePreparatory from "../../context/preparatory/usePreparatory";

function NormalizeDate(date: string) {
  return date.split("T")[0].split("-").reverse().join("/");
}

function PreparatoryPainel() {

  const { user, currentRole } = useAuth();
  const { CourseDays, getPreparatoryCourseDays } = usePreparatory();
  const roles = user?.roles;
  const navigation = useNavigate();

  useEffect(() => {
    if (currentRole && currentRole.id !== 2){
      navigation("/")
    }
    else if(user){
      getPreparatoryCourseDays(user.id)
    }
  })

  function navigateCourseDay(id: string) {
    navigation("/courseDay/" + id);
  }

  let listFuturePreparatoryDays: ReactElement[] = [];
  let listPastPreparatoryDays: ReactElement[] = [];
  
  if(roles && currentRole && CourseDays){
      listFuturePreparatoryDays = CourseDays
      .filter(
        (day) => !isFuture(day.timeEnd)
      )
      .map((day) => {
        return (
          <TestCard
            key={day.id}
            title={day.course.title + " / " + day.title }
            description="O curso preparatório para a prova de Ensino Fundamental para Jovens e Adultos em processo de alfabetização é uma iniciativa cuidadosamente elaborada para atender às necessidades específicas desse público."
            textAux={NormalizeDate(day.timeStart)}
            icon={AiOutlineCalendar}
            handleClick={() => navigateCourseDay(day.id)}
          />
        )
      })
  
      listPastPreparatoryDays = CourseDays
      .filter(
        (day) => isFuture(day.timeEnd)
      )
      .map((day) => {
        return (
          <TestCard
            key={day.id}
            title={day.course.title + " / " + day.title }
            description="O curso preparatório para a prova de Ensino Fundamental para Jovens e Adultos em processo de alfabetização é uma iniciativa cuidadosamente elaborada para atender às necessidades específicas desse público."
            textAux={NormalizeDate(day.timeStart)}
            icon={AiOutlineCalendar}
            handleClick={() => navigateCourseDay(day.id)}
          />
        )
      })
  }
  

  return (
    <Main>
      <h2 className="text-Blue text-lg font-bold uppercase">CURSOS ABERTOS</h2>
      <ListCard>
        {
          listFuturePreparatoryDays.length > 0 ? (
            listFuturePreparatoryDays
          ) : (
            <div className="w-full h-44 text-Concrete text-lg font-medium flex items-center justify-center">
              Não há provas agendadas
            </div>
          )
        }
      </ListCard>
      <h2 className="text-Blue text-lg font-bold uppercase">CURSOS FINALIZADOS</h2>
      <ListCard>
        {
          listPastPreparatoryDays.length > 0 ? (
            listPastPreparatoryDays
          ) : (
            <div className="w-full h-44 text-Concrete text-lg font-medium flex items-center justify-center">
              Não há provas finalizadas
            </div>
          )
        }
      </ListCard>
    </Main>
  );
}

export default PreparatoryPainel;