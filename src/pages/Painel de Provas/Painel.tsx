import { AiOutlineCalendar, AiFillAlert, AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import Button from "../../components/Button";
import TestCard from "../../components/TestCard";
import ListCard from "../../components/ListCard";
import { useEffect, useState } from "react";
import instance from "../../axios";
import { useNavigate } from "react-router-dom";

type TestCard = {
    id: string;
    name: string;
    description: string;
    dateStart: string;
}

function Painel() {
    const id = "014f79e8-b891-4329-85a5-bb54ba5692ea"
    const [tests, setTests] = useState<TestCard[]>([]);
    const navigate = useNavigate();
    
    useEffect(() => {
      return () => {
        instance.get(`/users/${id}/tests`)
        .then(
            res => {
                console.log(res.data);
                setTests(res.data);
            }
        )
        .catch((err) => {
            console.log(err);
        })
      }
    }, [id])
    return (
        <>
            <div className="px-6">
            <h2 className="text-Blue text-lg font-bold uppercase">PROVAS AGENDADAS</h2>
            <ListCard>
                {
                    tests.map(test => (
                        <TestCard handleClick={() => navigate("./aboutTest")}
                        icon={AiOutlineCalendar}
                        title={test.name}
                        subText={test.dateStart} 
                        description={test.description}
                        />
                    ))
                }
            </ListCard>
            <h2 className="text-Blue text-lg font-bold uppercase">Provas Realizadas</h2>
            <ListCard>
                <TestCard 
                    variant="confirm"
                    handleClick={() => navigate("./aboutTest")}
                    icon={AiOutlineCheckCircle}
                    title="Supletivo" 
                    subText="12/10/1993" 
                    description="Exame de aprovação do candidato no programa Vem Que Dá Tempo. Exame de aprovação do candidato no programa Vem Que Dá Tempo."
                />

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
            <Button variant="solid" color="warning">
                <AiFillAlert />
                ATENÇÃO
            </Button>
        </>
    );
}

export default Painel;