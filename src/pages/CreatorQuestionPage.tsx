import { useState } from "react";
import { ContainerInput } from "../components/ContainerInputs";
import SelectioField from "../components/SelectField";
import { TitleSection } from "../components/TitleSection";
import { ContentAuxRequest, QuestionArea, QuestionDifficulty, QuestionLevel, QuestionRequest } from "../models/Question";
import Main from "../components/Main";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../components/Button";
import {ModalAddContent} from "../components/ModalAddContent";
import { TypeContentAux } from "../models/ContentAux";
import DraggleItem from "../components/DraggleItem";
import { DragDropContext, DropResult, Droppable } from "@hello-pangea/dnd";



export function CreatorQuestionPage() {

  const [ questionRequest, setQuestionRequest ] = useState<QuestionRequest>({
    level: "" as QuestionLevel,
    area: "" as QuestionArea,
    difficulty: "" as QuestionDifficulty,
    skill: "",
    competence: "",
    alternatives: [],
    contentAux: [],
    type: "multiple-choice"
  });

  const [ modalAddContent, setModalAddContent ] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target;
    console.log(name, value)
    setQuestionRequest({
      ...questionRequest,
      [name]: name === "isCorrect" ? value === "true" : value
    });
  }

  const closeModal = () => { setModalAddContent(false) }

  function addContentAux(type: TypeContentAux, content: string) {
    setQuestionRequest((state) => ({
      ...state,
      contentAux: [
        ...state.contentAux,
        {
          type,
          content,
          order: 0
        }
      ]
    }));
  }

  function ListContent(contentList: ContentAuxRequest[]) {
    return contentList
      ?.map(({ type, content }, index) => <DraggleItem type={type} content={content} index={index}/>);
  }

  function handleDragEnd(event: DropResult) {
    const { source, destination } = event;

    if (!destination) return;

    const contentAux = questionRequest.contentAux;
    const [removed] = contentAux.splice(source.index, 1);
    contentAux.splice(destination.index, 0, removed).map((item, index) => item.order = index);

    setQuestionRequest((state) => ({
      ...state,
      contentAux,
    }));
  }

  return(
    <>
      <Main>
        <TitleSection title="Categorização" />
        <section className="mt-8 flex flex-col gap-8">
          <ContainerInput>
            <SelectioField 
              label="Nível de Conhecimento"
              value={questionRequest.level}
              name="level"
              onChange={handleChange}
              className="max-w-none"
              options={[
                { value: "", label: "Selecione um nível"},
                { value: "INFANTIL", label: "Ensino Infantil" },
                { value: "FUNDAMENTAL", label: "Ensino Fundamental" },
                { value: "MEDIO", label: "Ensino Médio" },
              ]}
            />
            <SelectioField 
              label="Área de Conhecimento"
              value={questionRequest.area}
              name="area"
              onChange={handleChange}
              className="max-w-none"
              options={[
                { value: "", label: "Selecione uma área"},
                { value: "MATEMATICA", label: "Matemática" },
                { value: "LINGUAGENS", label: "Linguagens" },
                { value: "CIENCIAS_HUMANAS", label: "Ciências Humnas" },
                { value: "CIENCIAS_NATUREZA", label: "Ciências da Natureza" },
              ]}
            />
          </ContainerInput>
          <ContainerInput>
            <SelectioField 
              label="Dificuldade"
              value={questionRequest.difficulty}
              name="difficulty"
              onChange={handleChange}
              className="max-w-none"
              options={[
                { value: "", label: "Selecione uma dificuldade"},
                { value: "1", label: "Fácil" },
                { value: "2", label: "Médio" },
                { value: "3", label: "Difícil" },
              ]}
            />
            <SelectioField 
              label="Habilidade"
              value={questionRequest.skill}
              name="skill"
              onChange={handleChange}
              options={[
                { value: "", label: "Selecione uma habilidade"},
                { value: "1", label: "ler" },
                { value: "2", label: "escrever" },
                { value: "3", label: "falar" },
                { value: "4", label: "ouvir" },
              ]}
              className="max-w-none"
            />
          </ContainerInput>
          <ContainerInput>
            <SelectioField 
              label="Competência"
              value={questionRequest.competence}
              name="competence"
              onChange={handleChange}
              options={[
                { value: "", label: "Selecione uma competência"},
                { value: "1", label: "compreender" },
                { value: "2", label: "interpretar" },
                { value: "3", label: "analisar" },
                { value: "4", label: "refletir" },
              ]}
              className="max-w-none"
            />
            <SelectioField 
              label="Tipo de Questão"
              value={questionRequest.type}
              name="type"
              onChange={handleChange}
              options={[
                { value: "multiple-choice", label: "Múltipla escolha" },
                { value: "true-or-false", label: "Verdadeiro ou falso" },
              ]}
              className="max-w-none"
            />
          </ContainerInput >
          <ContainerInput>
            {
              questionRequest.type === "true-or-false" && (
                <SelectioField
                  label="A questão é verdadeira ou falsa?"
                  value={String(questionRequest.isCorrect)}
                  name="isCorrect"
                  onChange={handleChange}
                  options={[
                    { value: "", label: "Selecione uma opção" },
                    { value: "true", label: "Verdadeiro" },
                    { value: "false", label: "Falso" },
                  ]}
                />
              )
            }
          </ContainerInput >
        </section>
        <section className="mt-8 flex flex-col gap-8">
          <div className="flex justify-between items-center">
          <TitleSection title="Conteúdo da Questão" />
            <Button onClick={() => setModalAddContent(true)}>
              Adicionar
              <AiOutlinePlus />
            </Button>
          </div>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="ContentsAux">
              {(provided) => (
                <div className="flex flex-col gap-4 " {...provided.droppableProps} ref={provided.innerRef}>
                  {ListContent(questionRequest.contentAux)}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </section>
      </Main>
      { modalAddContent && ( <ModalAddContent addContentAux={addContentAux} toggleModal={closeModal} /> )}
    </>
  );
}