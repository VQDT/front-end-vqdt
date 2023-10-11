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
 
interface AboutTest {
  variant?: "default" | "alert" | "warning" | "confirm";
}

function AboutTest({ variant = "default" }: AboutTest) {
  return (
    <>
      <Container>
        <Header>
          <Title>
            <span className="text-2xl uppercase">Exame Supletivo</span>
          </Title>
          <SubTextContainer>
            <SubText variant={variant}>
                <AiOutlineCalendar size={36} className="text-Concrete"/>
                <span className="text-lg font-bold uppercase">12/10/2023</span>
            </SubText>
            <SubText variant={variant}>
                <AiOutlineClockCircle size={36}  className="text-Concrete"/>
                <span className="text-lg font-bold uppercase">08:00</span>
            </SubText>
          </SubTextContainer>
        </Header>
        <About>
          <AboutTitle text="Sobre a prova"/>
          <AboutContent text="Duis ultricies in ex ut dignissim. Etiam viverra porta lectus quis blandit. Nam gravida arcu sit amet urna auctor fringilla. Ut urna massa, semper vel nisl quis, ornare consequat ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare, dolor sit amet tempor auctor, massa nunc dictum justo, vitae pellentesque lacus nisi sit amet mauris. Nunc aliquam pharetra condimentum. Quisque venenatis orci eu neque ultrices, non auctor augue viverra. Donec faucibus odio vel magna tincidunt, ut porttitor dolor accumsan. Aliquam tincidunt molestie nisl, at auctor velit."/>
        </About>      
        <ContainerLocalContent>
          <LocalContent>
            <AboutTitle text="Local de aplicação da prova"/>
            <LocalTitle text="ESCOLA ESTADUAL ALFREDO GASPAR DE MENDONCA"/>
            <LocalLink href="#" text="Eustáquio Gomes, Ao lado da antiga Telasa, R. K Um, S/N - Cidade Universitária, Maceió - AL, 57072-000" />
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
        <Button variant="outline">
          <AiOutlineArrowLeft />
          VOLTAR
        </Button>
      </div>
    </>
  )
}

export default AboutTest;