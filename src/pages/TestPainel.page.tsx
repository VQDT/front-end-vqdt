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

function NormalizeDate(date: string) {
  return date.split("T")[0].split("-").reverse().join("/");
}

function TestPainel() {
  
  const { tests } = useTest();
  const navigation = useNavigate();
  
  function navigateTest(id: string) {
    navigation("/provas/" + id);
  }

  
  const listTestFuture = tests.filter((test) => !isFuture(test.timeEnd))
    .map((test) => {
      return(
        <TestCard
          key={test.id}
          title={test.name}
          description={test.description}
          subText={NormalizeDate(test.dateStart)}
          icon={AiOutlineCalendar}
          handleClick={() => navigateTest(test.id)}
        />
      );
    })


  const listPastTests = tests
    .filter((test) => isFuture(test.timeEnd))
    .map((test) => {
      return (  
        <TestCard
          key={test.id}
          title={test.name}
          description={test.description}
          subText={test.testAttendances[0].approved ? "Aprovado" : "Reprovado"}
          icon={test.testAttendances[0].approved ? AiOutlineCheckCircle : AiOutlineCloseCircle}
          variant={test.testAttendances[0].approved ? "confirm" : "alert"}
          handleClick={() => navigateTest(test.id)}
        />
      );
    });


  return (
    <Main>
      <h2 className="text-Blue text-lg font-bold uppercase">
        PROVAS AGENDADAS
      </h2>
      <ListCard>
        { 
          listTestFuture.length > 0 
            ? listTestFuture
            : (
              <div className="w-full h-44 text-Concrete text-lg font-medium flex items-center justify-center">
                Não há provas agendadas
              </div>
            )
        }
      </ListCard>  
      <h2 className="text-Blue text-lg font-bold uppercase">
        PROVAS REALIZADAS
      </h2>
      <ListCard>{listPastTests.length > 0 ? listPastTests : " Nenhuma Prova finalizada "}</ListCard>
    </Main>
  );
}

export default TestPainel;
