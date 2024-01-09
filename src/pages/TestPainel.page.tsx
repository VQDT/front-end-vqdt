import ListCard from "../components/ListCard";
import TestCard from "../components/TestCard";
import Main from "../components/Main";
import useTest from "../context/test/useTest";
import {
  AiOutlineCalendar,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import isFuture from "../utils/isFuture";
import useAuth from "../context/auth/useAuth";
import { ReactElement } from "react";

function NormalizeDate(date: string) {
  return date.split("T")[0].split("-").reverse().join("/");
}

function TestPainel() {

  const { roles, currentRole } = useAuth();
  const { tests } = useTest();
  const navigation = useNavigate();

  function navigateApplicatorTest(id: string) {
    navigation("/application/" + id);
  }

  let listFutureTests: ReactElement[] = [];
  let listPastTests: ReactElement[] = [];

  const isRoleCondidate = currentRole?.name === "Candidato";

  if(roles && currentRole){
    if (isRoleCondidate){
      listFutureTests = tests
      .filter(
        (test) => !isFuture(test.timeEnd) && !test.testAttendances?.[0].testFinished
      )
      .map((test) => {
        return (
          <TestCard
            key={test.id}
            title={test.name}
            description={test.description}
            textAux={NormalizeDate(test.dateStart)}
            icon={AiOutlineCalendar}
            handleClick={() => navigation("/provas/" + test.id)}
          />
        );
      });

      listPastTests = tests
      .filter(
        (test) => isFuture(test.timeEnd) || test.testAttendances?.[0].testFinished
      )
      .map((test) => {
        return (
          <TestCard
            key={test.id}
            title={test.name}
            description={test.description}
            textAux={test.testAttendances?.[0].approved ? "Aprovado" : "Reprovado"}
            icon={
              test.testAttendances?.[0].approved
                ? AiOutlineCheckCircle
                : AiOutlineCloseCircle
            }
            variant={test.testAttendances?.[0].approved ? "confirm" : "alert"}
            handleClick={() => navigation("/provas/" + test.id)}
          />
        );
      });
    }
    else if (currentRole.name === "Aplicador"){
      listFutureTests = tests
      .filter(
        (test) => !isFuture(test.timeEnd)
      )
      .map((test) => {
        return (
          <TestCard
            key={test.id}
            title={test.name}
            description={test.description}
            textAux={NormalizeDate(test.dateStart)}
            icon={AiOutlineCalendar}
            handleClick={() => navigateApplicatorTest(test.id)}
          />
        )
      })
  
      listPastTests = tests
      .filter(
        (test) => isFuture(test.timeEnd)
      )
      .map((test) => {
        return (
          <TestCard
            key={test.id}
            title={test.name}
            description={test.description}
            textAux={NormalizeDate(test.dateStart)}
            icon={AiOutlineCalendar}
            handleClick={() => navigateApplicatorTest(test.id)}
          />
        )
      })
    }
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
          listFutureTests.length > 0 ? (
            listFutureTests
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
          listPastTests.length > 0 ? (
            listPastTests
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

export default TestPainel;
