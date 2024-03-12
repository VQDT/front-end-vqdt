import Button from "../../components/Button";
import About from "./About";
import AboutTitle from "./AboutTitle";
import AboutContent from "./AboutContent";
import ContainerLocalContent from "./ContainerLocalContent";
import LocalTitle from "./LocalTitle";
import LocalLink from "./LocalLink";
import LocalContent from "./LocalContent";
import Subjects from "./Subjects";
import Subject from "./Subject";
import Container from "./Container";
import {
  AiOutlineArrowLeft,
  AiOutlineCalendar,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { BiBookOpen, BiMath } from "react-icons/bi";
import { MdOutlineScience, MdOutlinePsychology } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import useTest from "../../context/test/useTest";
import { useEffect } from "react";
import { format } from 'date-fns-tz';
import isFuture from "../../utils/isFuture";
import InfoBox from "../../components/InfoBox";
interface AboutTest {
  variant?: "default" | "alert" | "warning" | "confirm";
}

function AboutTest({ variant = "default" }: AboutTest) {
  const { id } = useParams();
  const { test, getTest, removeTestAttendance } = useTest();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getTest(id);
    }
  }, []);

  async function removeAttendance() {
    if(id){
      const remove = await removeTestAttendance(id)
      if (remove){
        navigate("/candidato")
      }
    }
  }

  if (test) {
    const {
      name,
      dateStart,
      testAttendances,
      timeEnd,
      testPeriod,
      description,
      classroom: {
        schools: {
          name: schoolname,
          address: { city, neighbour, street, zipCode, state },
        },
      },
    } = test;

    const isFutureTestOrFinishedTest = isFuture(timeEnd) || testAttendances?.[0].testFinished;
    const isApproved = testAttendances?.[0].approved;

    return (
      <>
        <Container>
          {
            isFutureTestOrFinishedTest
              ?<InfoBox
                title={name}
                textAux={isApproved ? "Aprovado" : "Reprovado"}
                variant={isApproved ? "confirm" : "alert"}
                icon={isApproved ? AiOutlineCheckCircle : AiOutlineCloseCircle}
              />
              :<InfoBox
                title={name}
                textAux={format(new Date(dateStart), "dd/MM/yyyy") + " - " + format(new Date(dateStart), "HH:mm")}
                variant={variant}
                icon={AiOutlineCalendar}
              />
          }
          <About>
            <AboutTitle text="Sobre a prova" />
            <AboutContent text={description} />
          </About>
          <ContainerLocalContent>
            <LocalContent>
              <AboutTitle text="Local de aplicação da prova" />
              <LocalTitle text={schoolname} />
              <LocalLink
                href="#"
                text={`${neighbour}, ${street}, ${city} - ${state} - ${zipCode}`}
              />
            </LocalContent>
            <LocalContent>
              <AboutTitle text="Conteúdo da prova" />
              <Subjects>
                <Subject text="Matemática" icon={BiMath} />
                <Subject text="Ciências da Natureza" icon={MdOutlineScience} />
                <Subject text="Ciências Humanas" icon={MdOutlinePsychology} />
                <Subject text="Linguagens" icon={BiBookOpen} />
              </Subjects>
            </LocalContent>
          </ContainerLocalContent>
          <div className="flex gap-4 justify-between flex-wrap">
            {
              testAttendances?.[0].testFinished ? null :
              <Button variant="outline" color="alert" onClick={() => removeAttendance()}>
                CANCELAR AGENDAMENTO
              </Button>
            }
            {
              testPeriod && testAttendances?.[0].presence && !testAttendances?.[0].testFinished &&
              <Button onClick={() => navigate("/prova/introduction/" + id)}>REALIZAR PROVA</Button>
            }
          </div>
        </Container>
        <div className="mt-6 flex justify-center">
          <Button
            variant="outline"
            onClick={() => {
              navigate("/candidato");
            }}
          >
            <AiOutlineArrowLeft />
            VOLTAR
          </Button>
        </div>
      </>
    );
  }
}

export default AboutTest;