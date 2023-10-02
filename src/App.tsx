import Button from "./components/Button";
import Header from "./components/Header";
import ListCard from "./components/ListCard";
import TestCard from "./components/TestCard";
import { AiOutlineCalendar, AiFillAlert } from "react-icons/ai";

function App() {
    return (
        <>
            <Header />
            <ListCard>
                <TestCard 
                    handleClick={console.log}
                    icon={AiOutlineCalendar}
                    title="Supletivo" 
                    subText="12/10/1993" 
                    description="Exame de aprovação do candidato no programa Vem Que Dá Tempo."
                />

                <TestCard 
                    handleClick={console.log}
                    icon={AiOutlineCalendar}
                    title="Supletivo" 
                    subText="12/10/1993" 
                    description="Exame de aprovação do candidato no programa Vem Que Dá Tempo."
                />

                <TestCard 
                    handleClick={console.log}
                    icon={AiOutlineCalendar}
                    title="Supletivo" 
                    subText="12/10/1993" 
                    description="Exame de aprovação do candidato no programa Vem Que Dá Tempo."
                />
      
            </ListCard>
            <Button variant="solid" color="warning">
                <AiFillAlert />
                ATENÇÃO
            </Button>
        </>
    );
}

export default App;