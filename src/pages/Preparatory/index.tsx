//import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import ListCard from "../../components/ListCard";
import TestCard from "../../components/TestCard";
import Main from "../../components/Main";
import useTest from "../../context/test/useTest";
import {
  AiOutlineCalendar,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import isFuture from "../../utils/isFuture";
import useAuth from "../../context/auth/useAuth";
import { ReactElement } from "react";

function NormalizeDate(date: string) {
  return date.split("T")[0].split("-").reverse().join("/");
}

function PreparatoryPainel() {

  const { roles, currentRole } = useAuth();
  const { tests } = useTest();
  const navigation = useNavigate();

  function navigateApplicatorTest(id: string) {
    navigation("/application/" + id);
  }

  let listFuturePreparatoryDays: ReactElement[] = [];
  let listPastPreparatoryDays: ReactElement[] = [];

  console.log(tests)
  if(roles && currentRole){
      listFuturePreparatoryDays = tests
      .filter(
        (test) => !isFuture(test.timeEnd)
      )
      .map((test) => {
        return (
          <TestCard
            key={test.id}
            title={test.name}
            description={test.description}
            subText={NormalizeDate(test.dateStart)}
            icon={AiOutlineCalendar}
            handleClick={() => navigateApplicatorTest(test.id)}
          />
        )
      })
  
      listPastPreparatoryDays = tests
      .filter(
        (test) => isFuture(test.timeEnd)
      )
      .map((test) => {
        return (
          <TestCard
            key={test.id}
            title={test.name}
            description={test.description}
            subText={NormalizeDate(test.dateStart)}
            icon={AiOutlineCalendar}
            handleClick={() => navigateApplicatorTest(test.id)}
          />
        )
      })
  }
  
  //FOR APPLICATOR ROLE
  function header1() {
    if (roles && currentRole && roles.length > 0) {
      if (currentRole.name === "Candidato") {
        return "PROVAS AGENDADAS";
      } else if (currentRole.name === "Aplicador") {
        return "APLICAÇÕES AGENDADAS";
      }
    }
  }

  function header2() {
    if (roles && currentRole && roles.length > 0) {
      if (currentRole.name === "Candidato") {
        return "PROVAS REALIZADAS";
      } else if (currentRole.name === "Aplicador") {
        return "APLICAÇÕES REALIZADAS";
      }
    }
  }

  return (
    <Main>
      <h2 className="text-Blue text-lg font-bold uppercase">{header1()}</h2>
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
      <h2 className="text-Blue text-lg font-bold uppercase">{header2()}</h2>
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