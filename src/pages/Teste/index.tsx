import Container from "../../components/Container";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import CardSubject from "../../components/CardSubject";
import Button from "../../components/Button";

interface ITestData {
  title: string;
  date: string;
  time: string;
  description: string;
  school: string;
  address: string;
  subjects: {
    name: string;
    img: string;
  }[];
}

function Teste() {
  const getTestData = (): ITestData => {
    //pegar informações da prova, por fetch ou props e salvar como "data"
    const data = {
      title: "Prova Supletivo",
      date: "19/07/2023",
      time: "08:00 - 12:00",
      description:
        "Duis ultricies in ex ut dignissim. Etiam viverra porta lectus quis blandit. Nam gravida arcu sit amet urna auctor fringilla. Ut urna massa, semper vel nisl quis, ornare consequat ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare, dolor sit amet tempor auctor, massa nunc dictum justo, vitae pellentesque lacus nisi sit amet mauris. Nunc aliquam pharetra condimentum. Quisque venenatis orci eu neque ultrices, non auctor augue viverra. Donec faucibus odio vel magna tincidunt, ut porttitor dolor accumsan. Aliquam tincidunt molestie nisl, at auctor velit.",
      school: "ESCOLA ESTADUAL ALFREDO GASPAR DE MENDONCA",
      address:
        "Eustáquio Gomes, Ao lado da antiga Telasa, R. K Um, S/N - Cidade Universitária, Maceió - AL, 57072-000",
      subjects: [
        {
          name: "Matemática",
          img: "https://g3i5r4x7.rocketcdn.me/wp-content/uploads/2020/04/matematica-o-que-e-conceito-historia-e-importancia-2.jpg.webp",
        },
        {
          name: "Linguagens",
          img: "https://classic.exame.com/wp-content/uploads/2023/04/GettyImages-1175038196.jpg?quality=70&strip=info&w=1024",
        },
        {
          name: "Ciências da Natureza",
          img: "https://foconoenem.com/wp-content/uploads/2018/02/Ci%C3%AAncias-da-Natureza-no-Enem.jpg",
        },
        { name: "Ciências Humanas", img: "" },
      ],
    };

    return data;
  };

  const testeData = getTestData();

  return (
    <>
      <Container>
        <section className="m-2 mt-5 mb-10 flex items-center gap-1">
          <h2 className="text-primary text-2xl font-bold">{testeData.title}</h2>
          <h2 className="ml-auto text-xl font-bold text-[--date-gray]">
            {testeData.date}
          </h2>
          <AiOutlineCalendar className="text-3xl mr-5 ml-2 text-[--date-gray]" />
          <h2 className="ml-1 text-xl font-bold text-[--date-gray]">
            {testeData.time}
          </h2>
          <AiOutlineClockCircle className="text-3xl ml-2 text-[--date-gray]" />
        </section>
        <section className="mb-5">
          <h2 className="mb-5 text-xl font-bold text-[--standart-black]">
            Sobre a prova
          </h2>
          <p className="text-[--standart-gray]">{testeData.description}</p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-bold text-[--standart-black]">
            Local de aplicação da prova
          </h2>
          <div className="flex flex-col">
            <span className="text-[--standart-gray] font-bold mb-2">
              {testeData.school}
            </span>
            <span className="text-[--address-blue] font-bold mb-5">
              {testeData.address}
            </span>
          </div>
        </section>
          <section className="flex justify-between">
            {testeData.subjects.map((subject, index) => (
              <CardSubject
                key={index}
                name={subject.name}
                img={subject.img}
              />
            ))}
          </section>
        <section className="flex justify-between mt-5">
          <div>
            <Button variant="cancel">Cancelar Agendamento</Button>
          </div>
          <div>
            <Button variant="primary">Realizar Prova</Button>
          </div>
        </section>
      </Container>
    </>
  );
}

export default Teste;
