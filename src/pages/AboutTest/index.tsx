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
import { AiOutlineArrowLeft, AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { BiBookOpen, BiMath } from "react-icons/bi";
import { MdOutlineScience, MdOutlinePsychology } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import useTestContext from "../../context/test/useTestContext";
 
interface AboutTest {
  variant?: "default" | "alert" | "warning" | "confirm";
}

function AboutTest({ variant = "default" }: AboutTest) {

  const { id } = useParams()
  const { ActualTest, loadActualTest } = useTestContext()
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(id){
      loadActualTest(id);
    }
  },[])

  console.log(ActualTest)

  return (
    <>
      <Container>
        <Header>
          <Title>
            <span className="text-2xl uppercase">{ActualTest?.name}</span>
          </Title>
          <SubTextContainer>
            <SubText variant={variant}>
                <AiOutlineCalendar size={36} className="text-Concrete"/>
                <span className="text-lg font-bold uppercase">{new Date(ActualTest?.dateStart as Date).toLocaleDateString()}</span>
            </SubText>
            <SubText variant={variant}>
                <AiOutlineClockCircle size={36}  className="text-Concrete"/>
                <span className="text-lg font-bold uppercase">{new Date(ActualTest?.dateStart as Date).toLocaleTimeString('de', {
    hour: '2-digit',
    minute: '2-digit'
  })}</span>
            </SubText>
          </SubTextContainer>
        </Header>
        <About>
          <AboutTitle text="Sobre a prova"/>
          <AboutContent text={ActualTest?.description as string}/>
        </About>      
        <ContainerLocalContent>
          <LocalContent>
            <AboutTitle text="Local de aplicação da prova"/>
            <LocalTitle text={ActualTest?.classroom.schools.name as string}/>
            <LocalLink href="#" text={ActualTest?.classroom.schools.address.city +" - "+ActualTest?.classroom.schools.address.state+" , "+ActualTest?.classroom.schools.address.neighbour} />
          </LocalContent>
          <LocalContent>
            <AboutTitle text="Conteúdo da prova"/>
              <Subjects>
                <Subject text="Matemática" icon={BiMath}/>
                <Subject text="Ciências da Natureza" icon={MdOutlineScience}/>
                <Subject text="Ciências Humanas" icon={MdOutlinePsychology}/>
                <Subject text="Linguagens" icon={BiBookOpen}/>
              </Subjects>
          </LocalContent>
        </ContainerLocalContent>
        <div className="flex gap-4 justify-between flex-wrap">
          <Button variant="outline" color="alert">CANCELAR AGENDAMENTO</Button>
          <Button>REALIZAR PROVA</Button>
        </div>
      </Container>
      <div className="mt-6 flex justify-center">
        <Button variant="outline" handleClick={()=> {navigate("/")}}>
          <AiOutlineArrowLeft />
          VOLTAR
        </Button>
      </div>
    </>
  )
}

export default AboutTest;