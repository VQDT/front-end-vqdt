import SubjectCard from "../../components/SubjectCard";
import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import Card from "../../components/Card";

function Test() {
  return(
    <div className="w-full min-h-screen p-3 bg-Blue flex gap-3 box-border">
      <div className="w-fit flex flex-col gap-3">
        <Card.Container>
          <img src={logo} alt="" className="max-w-full"/>
        </Card.Container>
        <Card.Container>
          <Card.Title text="Tempo Restante"/>
          <p className="text-Midnight text-4xl text-right">1:00:00</p>
        </Card.Container>
        <h3 className="text-White text-center text-2xl font-semibold uppercase">Progresso</h3>
        <ul className="flex flex-col gap-3">
          <SubjectCard done="5" total="10" subject="LINGUAGENS"/>
          <SubjectCard done="5" total="10" subject="MATEMÁTICA"/>
          <SubjectCard done="5" total="10" subject="HUMANAS"/>
          <SubjectCard done="5" total="10" subject="NATUREZA"/>
        </ul>
        <Card.Container direction="col">
          <Card.Title text="QUESTÕES FEITAS" />
          <p className="max-w-fit m-auto p-3 text-Secondary text-4xl border-b border-Secondary">
            <span className="text-Midnight text-6xl font-bold">20</span> de 40
          </p>
          <p className="mt-3 text-Secondary text-center text-base font-semibold">Restam 40 questões</p>
        </Card.Container>
        <Button color="warning" size="w-full">
          ENCERRAR PROVA
        </Button>
      </div>
      <div className="w-full max-h-screen bg-White rounded-xl"></div>
    </div>
  );
}

export default Test;