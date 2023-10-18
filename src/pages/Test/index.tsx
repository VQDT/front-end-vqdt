import { useNavigate } from "react-router";
import ListCard from "../../components/ListCard";
import TestCard from "../../components/TestCard";
import { Test, User } from "../../types";
import {
  AiOutlineCalendar,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { useEffect } from "react";
import useTestContext from "../../context/test/useTestContext";


function TestPainel() {

  const navigate = useNavigate();
  const { tests , loadTests } = useTestContext();

  useEffect(() => {
      const user:User = JSON.parse(sessionStorage.getItem("user") || '{}');
      console.log(user)
      if (!user){
        navigate('/login')
      }
      else{
        loadTests(user.id)
      }
  },[])

  console.log(tests)
  const olds = tests?.filter(test => filterTests(test) === true)
  const nexts = tests?.filter(test => filterTests(test) === false)

  function filterTests(test:Test) {
      const now = Date.now();
      test.dateStart = new Date(test.dateStart);
      return now > test.dateStart.getTime()
  }
  
  return (  
    <>
      <div className="px-6">
        <h2 className="text-Blue text-lg font-bold uppercase">
          PROVAS AGENDADAS
        </h2>
        <ListCard>
          {
            nexts ? nexts.map(test => (
               <TestCard
                handleClick={console.log}
                icon={AiOutlineCalendar}
                title={test.name}
                subText={new Date(test.dateStart).toLocaleDateString()}
                description={test.description} />
            )) : <div> Nenhuma prova sobrando </div>
          }
        </ListCard>
        <h2 className="text-Blue text-lg font-bold uppercase">
          Provas Realizadas
        </h2>
        <ListCard>
          {
            olds ? olds.map(test => (
               <TestCard
                variant={test.score < 20 ? 'alert' : 'confirm'}
                handleClick={console.log}
                icon={test.score < 20 ? AiOutlineCloseCircle: AiOutlineCheckCircle}
                title={test.name}
                subText={new Date(test.dateStart).toLocaleDateString()}
                description={test.description} />
            )): <div> Nenhuma prova sobrando </div>
          }
          <TestCard
            variant="alert"
            handleClick={console.log}
            icon={AiOutlineCloseCircle}
            title="Supletivo"
            subText="12/10/1993"
            description="Exame de aprovação do candidato no programa Vem Que Dá Tempo."
          />
        </ListCard>
      </div>
    </>
  );
}

export default TestPainel;
