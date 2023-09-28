import MenuProva from "../../components/MenuProva";

interface DataProva {
    ending: Date;
    subjects: {
        name: string;
        questionNum: number;
        answerNum: number;
    }[];
} 

function Prova () {
    const provaData: DataProva = {
        ending: new Date(),
        subjects: [
          {
            name: 'LINGUAGENS',
            questionNum: 10,
            answerNum: 7,
          },
          {
            name: 'MATEMÁTICA',
            questionNum: 10,
            answerNum: 4,
          },
          {
            name: 'HUMANAS',
            questionNum: 10,
            answerNum: 2,
          },
          {
            name: 'NATUREZA',
            questionNum: 10,
            answerNum: 0,
          },
        ],
      };

    return (
        <div className="bg-primary min-h-screen flex">
            <MenuProva data={provaData} />
            <div className=" ml-[400px] mr-7 mb-7 w-full">
            <section className="bg-white w-full mt-7 w-full rounded-xl">
                <div>Teste</div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </section>
            </div>
        </div>
    );
}

export default Prova;