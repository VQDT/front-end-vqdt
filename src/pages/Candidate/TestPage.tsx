import SubjectCard from "../../components/SubjectCard";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Stopwatch from "../../components/Stopwatch";
import Question from "../../components/question";
import { ContentAux } from "../../models/ContentAux";
import { Alternative } from "../../models/Alternative";
import { Answer } from "../../models/Question";

import instance from "../../axios";
import useAuth from "../../context/auth/useAuth";
import useTest from "../../context/test/useTest";

import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

import logo from "../../assets/logo.png";

function Test() {
  const { user } = useAuth();
  const { test, getTest, getQuestions, questions, setScoreAndStatus } =
    useTest();
  const [openEncerramento, setOpenEncerramento] = useState<boolean>(false);
  const [openPassword, setopenPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [list, setList] = useState<Answer[]>([]);
  const [checkTimeEnd, setcheckTimeEnd] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();
  const navigation = useNavigate();

  console.log(questions)

  useEffect(() => {
    if (id) {
      getTest(id);
      getQuestions(id);
    }
  }, []);

  const totalQuestions = questions.length;

  function changeOpenEncerramento() {
    setOpenEncerramento((prev) => !prev);
  }

  function changeOpenPassword() {
    openEncerramento && setOpenEncerramento(false);
    setopenPassword((prev) => !prev);
  }

  interface listaPorAreaDoConhecimento {
    area: string
    question: string[]
  }

  const areaDoConhecimentoList = questions?.reduce((acc: listaPorAreaDoConhecimento[], question) => {
    const { knowledgeArea } = question;
    const areaExist = acc.findIndex((item) => item.area === knowledgeArea)
    if(areaExist === -1) {
      acc.push({ area: knowledgeArea, question: [question.id] })
    } else {
      acc[areaExist].question.push(question.id)
    }
    return acc;
  }, []);

  const listAreaDoConhecimento = areaDoConhecimentoList.map((resposta) => {
    const nQuestionResp = list.filter((item) => {
      return resposta.question.includes(item.idQuestion);
    })

    return (
      <SubjectCard 
        done={nQuestionResp.length.toString()}
        total={resposta.question.length.toString()} 
        subject={resposta.area} 
      />
    );
  })

  function calculateResult() {
    
    if (test) {
      let score = 0;
      let status = false;
      list.map((item) => {
        questions
          .find((q) => q.id === item.idQuestion)
          ?.alternatives.find((a) => a.id === item.idAlternatives)?.correct === true && score++;
      });
      if (score >= test.numberQuestion / 2) {
        status = true;
      }
      setScoreAndStatus(test.id, score, status);
      navigation("/comprovante-de-participacao/" + test.id);
    }
  }

  async function handleSubmit() {
    try {
      const auth = await instance.post("users/auth/login", {
        cpf: user?.cpf,
        password: password,
      });
      if (auth.status === 200) {
        calculateResult();
      }
    } catch (error) {
      alert("Senha incorreta");
    }
  }

  function handleAlternative(e: ChangeEvent<HTMLInputElement>) {
    const { id, name } = e.target;
    const questionExists = list.find((item) => item.idQuestion === name);

    if (questionExists) {
      const newList = list.map((item) => {
        if (item.idQuestion === name) return { ...item, idAlternatives: id };
        return item;
      });
      setList(newList);
    } else {
      setList((previous) => [
        ...previous,
        { idQuestion: name, idAlternatives: id },
      ]);
    }
  }

  function switchContent(contentList: ContentAux[]) {
    return contentList
      ?.sort((a, b) => a.order - b.order)
      ?.map(({ id, type, content }) => {
        switch (type) {
          case "title":
            return <Question.Title key={id} text={content} />;

          case "text":
            return <Question.Text key={id} text={content} />;

          case "image":
            return <Question.Image key={id} src={content} />;

          case "ref":
            return <Question.Ref key={id} text={content} />;

          case "asking":
            return <Question.Asking key={id} text={content} />;

          default:
            return <div key={id}></div>;
        }
      });
  }

  function alternativeList(alternativeList: Alternative[]) {
    return alternativeList?.map(({ id, idQuestion, content }) => {
      return (
        <Question.Alternative
          key={id}
          id={id}
          name={idQuestion}
          label={content}
          onChange={handleAlternative}
        />
      );
    });
  }

  useEffect(() => {
    if (checkTimeEnd) {
      calculateResult();
    }
  }, [checkTimeEnd]);


  const questionList = questions?.map(
    ({ id, type, knowledgeArea, alternatives, ContentAux }, index) => {
      return (
        <Question.Root key={id}>
          <div className="mb-5 flex justify-between">
            <Question.QuestionNumber text={`Questão ${index + 1}`} />
            <span className="text-Secondary font-light uppercase">
              #{knowledgeArea}
            </span>
          </div>
          <div>{switchContent(ContentAux)}</div>
          {type === "multiple-choice" ? (
            <div className="flex flex-col gap-3">
              {alternativeList(alternatives)}
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <label
                key={id}
                htmlFor="true"
                className="flex gap-2 items-center"
              >
                <input
                  type="radio"
                  id="true"
                  name={id}
                  className="w-6 aspect-square"
                  onChange={handleAlternative}
                />
                <span className="text-Midnight text-sm">Verdadeiro</span>
              </label>
              <label
                key={id}
                htmlFor="false"
                className="flex gap-2 items-center"
              >
                <input
                  type="radio"
                  id="false"
                  name={id}
                  className="w-6 aspect-square"
                  onChange={handleAlternative}
                />
                <span className="text-Midnight text-sm">Falso</span>
              </label>
            </div>
          )}
        </Question.Root>
      );
    }
  );


  return (
    <div className="w-full min-h-screen p-3 bg-Blue flex gap-3 box-border">
      <div className="w-fit flex flex-col gap-3">
        <Card.Container>
          <img src={logo} alt="" className="max-w-full" />
        </Card.Container>
        {test && (
          <Stopwatch
            milliseconds={test.milliseconds}
            handleTime={(num: number) => setcheckTimeEnd(num <= 0)}
          />
        )}
        <h3 className="text-White text-center text-2xl font-semibold uppercase">
          Progresso
        </h3>
        <ul className="flex flex-col gap-3">
          { listAreaDoConhecimento }
        </ul>
        <Card.Container direction="col">
          <Card.Title text="QUESTÕES FEITAS" />
          <p className="max-w-fit m-auto p-3 text-Secondary text-4xl border-b border-Secondary">
            <span className="text-Midnight text-6xl font-bold">
              {list.length}
            </span>{" "}
            de {totalQuestions}
          </p>
          <p className="mt-3 text-Secondary text-center text-base font-semibold">
            Restam {totalQuestions - list.length} questões
          </p>
        </Card.Container>
        <Button color="warning" size="w-full" onClick={changeOpenEncerramento}>
          ENCERRAR PROVA
        </Button>
      </div>
      <div className="w-full max-h-screen py-8 bg-White rounded-xl box-border">
        <ul className="max-h-full px-8 flex flex-col gap-9 overflow-auto">
          {questionList}
        </ul>
      </div>
      {openEncerramento && (
        <Modal
          text={
            totalQuestions - list.length > 0
              ? `Deseja mesmo encerrar a prova? Ainda há ${
                totalQuestions - list.length
                } questões sem resposta.`
              : `Deseja mesmo encerrar a prova?`
          }
          title="Atenção"
          variant={totalQuestions - list.length > 0 ? "alert" : "default"}
          inputs
          buttons={[
            <Button
              variant={
                totalQuestions - list.length > 0 ? undefined : "outline"
              }
              onClick={changeOpenEncerramento}
            >
              <AiOutlineArrowLeft />
              Voltar
            </Button>,
            <Button
              variant={
                totalQuestions - list.length > 0 ? "outline" : undefined
              }
              color={
                totalQuestions - list.length > 0 ? "alert" : "default"
              }
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
          variant="default"
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
            <Button
              onClick={changeOpenPassword}
              variant={
                test!.numberQuestion - list.length > 0 ? undefined : "outline"
              }
            >
              <AiOutlineArrowLeft />
              Voltar
            </Button>,
            <Button
              variant={
                test!.numberQuestion - list.length > 0 ? "outline" : undefined
              }
              color={
                test!.numberQuestion - list.length > 0 ? "alert" : "default"
              }
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
