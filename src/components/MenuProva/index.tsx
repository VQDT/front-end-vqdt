import logo from "../../assets/logo.png";
import Button from "../Button";
import Countdown from "../CountDown";
import "./style.module.css"

interface DataProva {
  ending: Date;
  subjects: {
    name: string;
    questionNum: number;
    answerNum: number;
  }[];
}

interface MenuProvaProps {
  data: DataProva;
}

function MenuProva(props: MenuProvaProps) {
  const { data } = props;

  return (
    <div className="max-h-screen overflow-y-auto max-w-[400px] w-full p-7 fixed">
      <section className="bg-white w-full rounded-xl py-5 px-2 mb-6 shadow-lg">
        <img src={logo} />
      </section>
      <Countdown availableTime={2}/>
      <h1 className="text-white font-semibold text-2xl py-5 flex justify-center">
        PROGRESSO
      </h1>
      {data.subjects.map((subject, index) => (
        <section
          key={index}
          className="p-5 bg-white mb-[0.6rem] flex justify-between rounded-xl shadow-lg"
        >
          <span className="font-semibold text-primary text-xl py-[2px]">
            {subject.name}
          </span>
          <span className="text-concrete text-2xl">
            {subject.answerNum} DE {subject.questionNum}
          </span>
        </section>
      ))}
      <section className="p-5 mt-4 mb-5 bg-white rounded-xl shadow-lg">
        <h2 className="font-bold text-primary text-xl py-[2px] flex justify-center">
          QUESTÕES FEITAS
        </h2>
        <div className="flex justify-center">
          <span className="text-midnight text-6xl font-bold pr-3">0</span>
          <span className="text-concrete text-3xl pt-[24px]">DE 40</span>
        </div>
        <div className="w-full flex justify-center">
          <div className="bg-concrete w-5/6 h-[1px] my-4" />
        </div>

        <span className="flex justify-center text-concrete font-semibold">
          Restam 40 questões
        </span>
      </section>
      <section>
        <Button variant="primaryBlueBg"> ENCERRAR PROVA</Button>
      </section>
    </div>
  );
}

export default MenuProva;
