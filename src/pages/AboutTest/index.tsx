import Button from "../../components/Button";
import Header from "../../components/TestCard/Header";
import Title from "../../components/TestCard/Title";
import SubText from "../../components/TestCard/SubText";
import SubTextContainer from "./SubtextContainer";
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
  AiOutlineClockCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { BiBookOpen, BiMath } from "react-icons/bi";
import { MdOutlineScience, MdOutlinePsychology } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import useTest from "../../context/test/useTest";
import { useEffect, useState } from "react";
import { format } from 'date-fns-tz';
interface AboutTest {
  variant?: "default" | "alert" | "warning" | "confirm";
}

function AboutTest({ variant = "default" }: AboutTest) {
  const { id } = useParams();
  const { test, getTest, removeTestAttendance } = useTest();
  const navigate = useNavigate();
  const [removed, setRemoved] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      getTest(id);
    }
  }, []);

  console.log(id)

  function removeAttendance() {
    if(id){
      removeTestAttendance(id)
      setRemoved(true)
    }
  }

  if(removed){
    navigate("/")
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

    return (
      <>
        <Container>
          <Header size="large">
            <Title>
              <span className="text-2xl uppercase">{name}</span>
            </Title>
            {!testAttendances[0].testFinished ? (
              <SubTextContainer>
                <SubText variant={variant}>
                  <AiOutlineCalendar size={36} className="text-Concrete" />
                  <span className="text-lg font-bold uppercase">
                    {format(new Date(dateStart), "dd/MM/yyyy")}
                  </span>
                </SubText>
                <SubText variant={variant}>
                  <AiOutlineClockCircle size={36} className="text-Concrete" />
                  <span className="text-lg font-bold uppercase">{`${format(
                    new Date(dateStart), "HH:mm"
                  )} - ${format(
                    new Date(timeEnd), "HH:mm"
                  )}`}</span>
                </SubText>
              </SubTextContainer>
            ) : (
              <SubText
                variant={testAttendances[0].approved ? "confirm" : "alert"}
              >
                {testAttendances[0].approved ? (
                  <AiOutlineCheckCircle size={36} />
                ) : (
                  <AiOutlineCloseCircle size={36} />
                )}
                <p className="text-lg p-3">
                  {testAttendances[0].approved ? "Aprovado" : "reprovado"}
                </p>
              </SubText>
            )}
          </Header>
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
            <Button variant="outline" color="alert" onClick={() => removeAttendance()}>
              CANCELAR AGENDAMENTO
            </Button>
            {!testPeriod ? null : (
              <Button onClick={() => navigate("/prova/introduction/" + id)}>REALIZAR PROVA</Button>
            )}
          </div>
        </Container>
        <div className="mt-6 flex justify-center">
          <Button
            variant="outline"
            onClick={() => {
              navigate("/");
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
