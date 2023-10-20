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

  const olds = tests?.filter(test => filterTests(test) === true) as Test[]
  const nexts = tests?.filter(test => filterTests(test) === false) as Test[]

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
            nexts?.length > 0 ? nexts.map(test => (
              <TestCard
                key={test.id}
                handleClick={() => navigate('/provas/'+ test.id)}
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
            olds?.length > 0 ? olds.map(test => (
               <TestCard
                key={test.id}
                variant={test.testAttendances[0].approved === false ? 'alert' : 'confirm'}
                handleClick={() => navigate('/provas/'+ test.id)}
                icon={test.testAttendances[0].approved === false ? AiOutlineCloseCircle : AiOutlineCheckCircle}
                title={test.name}
                subText={new Date(test.dateStart).toLocaleDateString()}
                description={test.description} />
            )): <div> Nenhuma prova sobrando </div>
          }
        </ListCard>
      </div>
    </>
  );
}

export default TestPainel;
