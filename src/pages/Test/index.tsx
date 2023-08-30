import CardTest from "../../components/CardTest/CardTest";
import Container from "../../components/Container";
import Tag from "../../components/Tag";
import { AiOutlineCalendar } from "react-icons/ai";


function Provas() {
    return(
        <>
            <section>
                <h2 className="mb-4 text-white text-3xl font-medium">Provas Agendadas</h2>
                <Container>
                    <div className="h-full max-h-[300px] bg-white rounded-md">
                    <ul className="rounded flex items-center gap-4">
                        <li className="shrink-0">
                        <CardTest 
                            title="Supletivo"
                            textAux="06/10/2023"
                            icon={AiOutlineCalendar}
                            description="Supletivo Vem que dá tempo, Exame de aprovação do candidato no programa"
                            tags={[
                            <Tag color="#C4AEAD" text="LGPD"/>,
                            ]}
                        />
                        </li>
                        <li className="shrink-0">
                        <CardTest 
                            type="secondary"
                            title="Supletivo"
                            description="Supletivo Vem que dá tempo, Exame de aprovação do candidato no programa"
                            textAux="05/10/2023"
                            icon={AiOutlineCalendar}
                            tags={[
                            <Tag color="#C4AEAD" text="VQDT"/>,
                            <Tag color="#ff9933" text="Supletivo"/>
                            ]}
                        />
                        </li>
                        <li className="shrink-0">
                        <CardTest 
                            type="secondary"
                            textAux="07/10/2023"
                            icon={AiOutlineCalendar}
                            title="Supletivo"
                            description="Supletivo Vem que dá tempo, Exame de aprovação do candidato no programa"
                            tags={[
                            <Tag color="red" text="Matemática"/>,
                            <Tag color="brown" text="Línguas"/>,
                            <Tag color="#ff9933" text="EJA"/>
                            ]}
                        />
                        </li>
                    </ul>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Provas;
