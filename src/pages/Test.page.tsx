import SubjectCard from "../components/SubjectCard";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import Card from "../components/Card";
import Question from "../components/question";
import Modal from "../components/Modal";
import Input from "../components/Input";
import useAuth from "../context/auth/useAuth";
import useTest from "../context/test/useTest";
import instance from "../axios";
import { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import Stopwatch from "../components/Stopwatch";
import { answer } from "../models/Question";

function Test() {

  const { user } = useAuth();
  const { test, getTest, getQuestions, questions, setScoreAndStatus } = useTest();
  
  

  const [openEncerramento, setOpenEncerramento] = useState<boolean>(false);
  const [openPassword, setopenPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [list, setList] = useState<answer[]>([]);

  const { id } = useParams<{ id: string }>();
  const navigation = useNavigate();

  function changeOpenEncerramento() {
    setOpenEncerramento((prev) => !prev);
  }

  function changeOpenPassword() {
    openEncerramento && setOpenEncerramento(false);
    setopenPassword((prev) => !prev);
  }
  
  async function handleSubmit() {
    if (user && test){
      try {
        const auth = await instance.post("users/auth/login", {
          cpf: user.cpf,
          password: password,
        });
        if (auth.status === 200) {
          let score = 0;
          let status = false;
          list.map(item => {
            questions.find(q => q.id === item.idQuestion)?.alternatives.find(a => a.id === item.idAlternatives)?.correct === true && score ++ 
          })
          if (score >= 20) {
            status = true;
          }
          setScoreAndStatus(test.id, score, status)
          navigation("/comprovante-de-participacao/"+ user?.id);
        }
      } catch(error) {
        alert("Senha incorreta");
      }
    }
  }

  function handleAlternative(e : ChangeEvent<HTMLInputElement>){
    const { id, name } = e.target;
    const questionExists = list.find(item => item.idQuestion === name);

    if(questionExists) {
      const newList = list.map((item) => {
        if(item.idQuestion === name) return { ...item, idAlternatives: id }
        return item;
      })
      setList(newList);
    } else {
      setList((previous) => [
        ...previous,
        { idQuestion: name, idAlternatives: id }
      ]);
    }

    
  }

  useEffect(() => { 
    if(id){
      getTest(id),
      getQuestions(id)
    }
  }, [])

  return (
    <div className="w-full max-h-screen p-3 bg-Blue flex gap-3 box-border">
      <div className="w-fit flex flex-col gap-3">
        <Card.Container>
          <img src={logo} alt="" className="max-w-full" />
        </Card.Container>
        {
          test && <Stopwatch milliseconds={test.milliseconds}/>
        }
        <h3 className="text-White text-center text-2xl font-semibold uppercase">
          Progresso
        </h3>
        <ul className="flex flex-col gap-3">
          <SubjectCard done="5" total="10" subject="LINGUAGENS" />
          <SubjectCard done="5" total="10" subject="MATEMÁTICA" />
          <SubjectCard done="5" total="10" subject="HUMANAS" />
          <SubjectCard done="5" total="10" subject="NATUREZA" />
        </ul>
        <Card.Container direction="col">
          <Card.Title text="QUESTÕES FEITAS" />
          <p className="max-w-fit m-auto p-3 text-Secondary text-4xl border-b border-Secondary">
            <span className="text-Midnight text-6xl font-bold">20</span> de 40
          </p>
          <p className="mt-3 text-Secondary text-center text-base font-semibold">
            Restam 40 questões
          </p>
        </Card.Container>
        <Button color="warning" size="w-full" onClick={changeOpenEncerramento}>
          ENCERRAR PROVA
        </Button>
      </div>
      <div className="w-full max-h-screen py-8 bg-White rounded-xl box-border">
        <ul className="max-h-full px-8 flex flex-col gap-9 overflow-auto">
          {
            questions.map (question => (
                <Question.Root>
                <Question.Title text={question.asking} />
                <Question.Text
                  title="O que é música?"
                  text="A pergunta “o que é música” tem sido alvo de discussão há décadas. Alguns autores defendem que música é a combinação de sons e silêncios de uma maneira organizada. Vamos explicar: um ruído de rádio emite sons, mas não de uma forma organizada, por isso não é classificado como música. Essa definição parece simples e completa, mas definir música não é algo tão óbvio assim. Podemos classificar um alarme de carro como música? Ele emite sons e silêncios de uma maneira organizada, mas garanto que a maioria das pessoas não chamaria esse som de música."
                />
                <Question.Asking text="O fragmento define o que é a música de forma simplificada. Como estratégia de construção do texto, o autor faz uso recorrente de:" />
                {
                  question.alternatives.map(alternative => (
                    <Question.Alternative
                      label={alternative.content}
                      id={alternative.id}
                      name={question.id}
                      onChange={handleAlternative}
                    />
                  ))
                }
              </Question.Root>
            ))
          }
        </ul>
      </div>
      {openEncerramento && (
        <Modal
          text="Deseja mesmo encerrar a prova? Ainda há 20 questões sem resposta."
          title="Atenção"
          variant="alert"
          inputs
          buttons={[
            <Button onClick={changeOpenEncerramento}>
              <AiOutlineArrowLeft />
              Voltar
            </Button>,
            <Button
              variant="outline"
              color="alert"
              onClick={changeOpenPassword}
            >
              Encerrar
            </Button>,
          ]}
        />
      )}

      {openPassword && (
        <Modal
          text="Digite sua senha para encerrar a prova."
          title="Atenção"
          variant="alert"
          inputs={
            <Input
              id="password"
              type="password"
              placeholder="************"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          }
          buttons={[
            <Button onClick={changeOpenPassword}>
              <AiOutlineArrowLeft />
              Voltar
            </Button>,
            <Button
              variant="outline"
              color="alert"
              type="submit"
              onClick={handleSubmit}
            >
              Encerrar
            </Button>,
          ]}
        />
      )}
    </div>
  );
}

export default Test;
