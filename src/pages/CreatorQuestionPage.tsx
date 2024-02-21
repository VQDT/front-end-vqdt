import { ContainerInput } from "../components/ContainerInputs";
import SelectioField from "../components/SelectField";
import { TitleSection } from "../components/TitleSection";
import { ContentAuxRequest } from "../models/Question";
import Main from "../components/Main";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../components/Button";
import { ModalAddContent } from "../components/ModalAddContent";
import DraggleItem from "../components/DraggleItem";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { ModalEditContent } from "../components/ModalEditContent";
import { useQuestion } from "../context/question/useQuestionContext";
import { Toaster } from "sonner";
import { ModalAddAlternative } from "../components/ModalAddAlternative";
import { CreateAlternativeItem } from "../components/CreateAlternativeItem";
import { ModalEditAlternative } from "../components/ModalEditAlternative";

export function CreatorQuestionPage() {
  const {
    questionRequest,
    handleChangeCategories,
    contentsAux,
    modalAddContentIsOpen,
    handleOpenModalAddContent,
    modalEditContentIsOpen: modalEditIsOpen,
    handleDragEnd,
    alternatives,
    changeCorrectAlternative,
    modalAddAlternativeIsOpen,
    handleOpenAddAlternative,
    modalEditAlternativeIsOpen,
    handleSubmitQuestion,
  } = useQuestion();

  function ListContent(contentList: ContentAuxRequest[]) {
    return contentList?.map(({ type, content }, index) => (
      <DraggleItem type={type} content={content} index={index} />
    ));
  }

  const alternativesList = alternatives.map((alternative, index) => {
    return (
      <CreateAlternativeItem
        label={alternative.content}
        key={index}
        checked={alternative.correct}
        id={index.toString()}
        onClick={() => changeCorrectAlternative(index)}
      />
    );
  });

  return (
    <>
      <Main>
        <form action="#" onSubmit={handleSubmitQuestion}>
          <TitleSection title="Categorização" />
          <section className="mt-8 flex flex-col gap-8">
            <ContainerInput>
              <SelectioField
                label="Nível de Conhecimento"
                value={questionRequest.level}
                name="level"
                onChange={handleChangeCategories}
                className="max-w-none"
                options={[
                  { value: "", label: "Selecione um nível" },
                  { value: "INFANTIL", label: "Ensino Infantil" },
                  { value: "FUNDAMENTAL", label: "Ensino Fundamental" },
                  { value: "MEDIO", label: "Ensino Médio" },
                ]}
              />
              <SelectioField
                label="Área de Conhecimento"
                value={questionRequest.area}
                name="area"
                onChange={handleChangeCategories}
                className="max-w-none"
                options={[
                  { value: "", label: "Selecione uma área" },
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
                onChange={handleChangeCategories}
                className="max-w-none"
                options={[
                  { value: "", label: "Selecione uma dificuldade" },
                  { value: "1", label: "Fácil" },
                  { value: "2", label: "Médio" },
                  { value: "3", label: "Difícil" },
                ]}
              />
              <SelectioField
                label="Habilidade"
                value={questionRequest.skill}
                name="skill"
                onChange={handleChangeCategories}
                options={[
                  { value: "", label: "Selecione uma habilidade" },
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
                onChange={handleChangeCategories}
                options={[
                  { value: "", label: "Selecione uma competência" },
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
                onChange={handleChangeCategories}
                options={[
                  { value: "multiple-choice", label: "Múltipla escolha" },
                  { value: "true-or-false", label: "Verdadeiro ou falso" },
                ]}
                className="max-w-none"
              />
            </ContainerInput>
            <ContainerInput>
              {questionRequest.type === "true-or-false" && (
                <SelectioField
                  label="A questão é verdadeira ou falsa?"
                  value={String(questionRequest.isCorrect)}
                  name="isCorrect"
                  onChange={handleChangeCategories}
                  options={[
                    { value: "", label: "Selecione uma opção" },
                    { value: "true", label: "Verdadeiro" },
                    { value: "false", label: "Falso" },
                  ]}
                />
              )}
            </ContainerInput>
          </section>
          <section className="mt-8 flex flex-col gap-8">
            <div className="flex justify-between items-center">
              <TitleSection title="Conteúdo da Questão" />
              <Button onClick={handleOpenModalAddContent}>
                Adicionar
                <AiOutlinePlus />
              </Button>
            </div>
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="ContentsAux">
                {(provided) => (
                  <div
                    className="flex flex-col gap-4 "
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {ListContent(contentsAux)}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </section>
          <section className="mt-8 flex flex-col gap-8">
            <div className="flex justify-between items-center">
              <TitleSection title="Alternativas da Questão" />
              <Button onClick={handleOpenAddAlternative}>
                Adicionar
                <AiOutlinePlus />
              </Button>
            </div>
            <div className="mb-6 flex flex-col gap-3">{alternativesList}</div>
          </section>
          <Button>Criar Questão</Button>
        </form>
      </Main>
      {modalAddContentIsOpen && <ModalAddContent />}
      {modalEditIsOpen && <ModalEditContent />}
      {modalAddAlternativeIsOpen && <ModalAddAlternative />}
      {modalEditAlternativeIsOpen && <ModalEditAlternative />}
      <Toaster duration={5000} position="top-right" />
    </>
  );
}
