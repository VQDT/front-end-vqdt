import { useNavigate } from "react-router";
import ListCard from "../../components/ListCard";
import TestCard from "../../components/TestCard";
import { AiOutlineCalendar, AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";


function Test() {

    const navigate = useNavigate();

    return (
        <div className="px-6">
            <h2 className="text-Blue text-lg font-bold uppercase">PROVAS AGENDADAS</h2>
            <ListCard>
                <TestCard 
                    handleClick={console.log}
                    icon={AiOutlineCalendar}
                    title="Supletivo" 
                    subText="12/10/1993" 
                    description="Exame de aprovação do candidato no programa Vem Que Dá Tempo. Exame de aprovação do candidato no programa Vem Que Dá Tempo."
                />

            </ListCard>
            <h2 className="text-Blue text-lg font-bold uppercase">Provas Realizadas</h2>
            <ListCard>
                <TestCard 
                    variant="confirm"
                    handleClick={() => navigate("/sobre-prova")}
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
    );
}

export default Test;