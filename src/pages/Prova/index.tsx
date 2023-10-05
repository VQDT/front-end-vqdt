import MenuProva from "../../components/MenuProva";
import QuestionCard from "../../components/QuestionCard";

interface DataProva {
  ending: Date;
  subjects: {
    name: string;
    questionNum: number;
    answerNum: number;
  }[];
}

interface QuestionData {
  number: string;
  subject: string;
  img: string;
  title: string;
  description: {
    text: string;
    reference: string;
  };
  question: string;
  choices: {
    text: string;
    img: string;
  }[];
}

function Prova() {
  const provaData: DataProva = {
    ending: new Date(),
    subjects: [
      {
        name: "LINGUAGENS",
        questionNum: 10,
        answerNum: 7,
      },
      {
        name: "MATEMÁTICA",
        questionNum: 10,
        answerNum: 4,
      },
      {
        name: "HUMANAS",
        questionNum: 10,
        answerNum: 2,
      },
      {
        name: "NATUREZA",
        questionNum: 10,
        answerNum: 0,
      },
    ],
  };

  const questions: QuestionData[] = [
    {
      number: "1",
      subject: "HUMANAS",
      img: "",
      title: "O que é música?",
      description: {
        text: "A pergunta “o que é música” tem sido alvo de discussão há décadas. Alguns autores defendem que música é a combinação de sons e silêncios de uma maneira organizada. Vamos explicar: um ruído de rádio emite sons, mas não de uma forma organizada, por isso não é classificado como música. Essa definição parece simples e completa, mas definir música não é algo tão óbvio assim. Podemos classificar um alarme de carro como música? Ele emite sons e silêncios de uma maneira organizada, mas garanto que a maioria das pessoas não chamaria esse som de música.",
        reference: "Disponível em: http://operamundi.uol.com.br. Acesso em: 6 dez. 2017 (adaptado).",
      },
      question: "O fragmento define o que é a música de forma simplificada. Como estratégia de construção do texto, o autor faz uso recorrente de:",
      choices: [
        { text: "enumerações para sustentar o ponto de vista apresentado.", img: "" },
        { text: "exemplificações para ilustrar a distinção entre a música e outros sons cotidianos.", img: "" },
        { text: "generalizações para sintetizar as diversas percepções sobre o que é a música.", img: "" },
        { text: "adjetivações para descrever os tipos de música.", img: "" },
        { text: "sinonímias para retomar as características das obras musicais.", img: "" },
      ],
    },
    {
      number: "2",
      subject: "HUMANAS",
      img: "https://images.alphacoders.com/550/550417.jpg",
      title: "Qual a influência da comunicação nos fluxos migratórios?",
      description: {
        text: `Denise Cogo, doutora em comunicação, discute a relação entre as tecnologias digitais e as migrações no mundo.
        Para a especialista, grande parte das representações e das experiências que conhecemos dos imigrantes chega pela mídia. “A mídia é mediadora das relações”, explica.
      
        O imigrante não é só um sujeito econômico, mas, explica Cogo, um sujeito sociocultural. Portanto, a comunicação integra a trajetória das migrações dentro de um processo histórico. “Desde o planejamento e o estudo das políticas migratórias para o país de destino até o contato com amigos e familiares, o encontro dos fluxos migratórios com as tecnologias digitais traz novas perspectivas para os sujeitos. Também se abre a possibilidade para que, com um celular na mão, os próprios imigrantes possam narrar suas histórias, construindo novos caminhos”, analisa.`,
        reference: "Disponível em: http://operamundi.uol.com.br. Acesso em: 6 dez. 2017 (adaptado).",
      },
      
      question: "O fragmento define o que é a música de forma simplificada. Como estratégia de construção do texto, o autor faz uso recorrente de:",
      choices: [
        { text: "enumerações para sustentar o ponto de vista apresentado.", img: "" },
        { text: "exemplificações para ilustrar a distinção entre a música e outros sons cotidianos.", img: "" },
        { text: "generalizações para sintetizar as diversas percepções sobre o que é a música.", img: "" },
        { text: "adjetivações para descrever os tipos de música.", img: "" },
        { text: "sinonímias para retomar as características das obras musicais.", img: "" },
      ],
    },
    {
      number: "3",
      subject: "HUMANAS",
      img: "https://images.alphacoders.com/550/550417.jpg",
      title: "Qual a influência da comunicação nos fluxos migratórios?",
      description: {
        text: `Denise Cogo, doutora em comunicação, discute a relação entre as tecnologias digitais e as migrações no mundo.
        Para a especialista, grande parte das representações e das experiências que conhecemos dos imigrantes chega pela mídia. “A mídia é mediadora das relações”, explica.
      
        O imigrante não é só um sujeito econômico, mas, explica Cogo, um sujeito sociocultural. Portanto, a comunicação integra a trajetória das migrações dentro de um processo histórico. “Desde o planejamento e o estudo das políticas migratórias para o país de destino até o contato com amigos e familiares, o encontro dos fluxos migratórios com as tecnologias digitais traz novas perspectivas para os sujeitos. Também se abre a possibilidade para que, com um celular na mão, os próprios imigrantes possam narrar suas histórias, construindo novos caminhos”, analisa.`,
        reference: "Disponível em: http://operamundi.uol.com.br. Acesso em: 6 dez. 2017 (adaptado).",
      },
      
      question: "O fragmento define o que é a música de forma simplificada. Como estratégia de construção do texto, o autor faz uso recorrente de:",
      choices: [
        { text: "", img: "https://images.alphacoders.com/550/550417.jpg" },
        { text: "", img: "https://images.alphacoders.com/550/550417.jpg" },
        { text: "", img: "https://images.alphacoders.com/550/550417.jpg" },
        { text: "", img: "https://images.alphacoders.com/550/550417.jpg" },
        { text: "", img: "https://images.alphacoders.com/550/550417.jpg" },
      ],
    },
  ];

  return (
    <div className="bg-primary min-h-screen flex">
      <MenuProva data={provaData} />
      <div className=" ml-[400px] mr-7 mt-7 mb-7 w-full">
        <section className="bg-white w-full w-full rounded-xl p-7">
          {questions.map((question, index) => (
            <QuestionCard key={index} data={question} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Prova;
