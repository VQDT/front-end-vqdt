import { ContainerInput } from "../../components/ContainerInputs";
import SelectioField from "../../components/SelectField";
import { TitleSection } from "../../components/TitleSection";
import Main from "../../components/Main";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../../components/Button";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { useQuestion } from "../../context/question/useQuestionContext";
import { Toaster } from "sonner";
import { ModalAddAlternative } from "../../components/ModalAddAlternative";
import { CreateAlternativeItem } from "../../components/CreateAlternativeItem";
import { ModalEditAlternative } from "../../components/ModalEditAlternative";
import Tiptap from "../../components/TipTapEditor";
import { useNavigate } from "react-router-dom";

export default function QuestionForm() {
  const {
    questionRequest,
    handleChangeCategories,
    alternatives,
    changeCorrectAlternative,
    modalAddAlternativeIsOpen,
    handleOpenAddAlternative,
    modalEditAlternativeIsOpen,
    handleSubmitQuestion,
    handleContent,
    handleDragEnd,
  } = useQuestion();

  const navigate = useNavigate();

    const alternativesList = alternatives.map((alternative, index) => {
        return (
            <CreateAlternativeItem
                label={alternative.content}
                key={index}
                required
                checked={alternative.correct}
                id={index.toString()}
                onChange={() => changeCorrectAlternative(index)}
            />
        );
    });

    async function submitQuestion(e: React.FormEvent<HTMLFormElement>) {
        const result = await handleSubmitQuestion(e);
        if (result) {
            navigate("/painel-de-elaborador");
        }
    }

    return (
        <>
        <Main>
            <form
            className="mt-4"
            action="#"
            encType="multpart/form-data"
            onSubmit={submitQuestion}
            >
                <TitleSection title="Categorização" />
                <section className="mt-4 flex flex-col gap-8">
                    <ContainerInput>
                        <SelectioField
                            label="Nível de Conhecimento"
                            value={questionRequest.knowledgeLevel}
                            name="knowledgeLevel"
                            onChange={handleChangeCategories}
                            className="max-w-none"
                            required
                            options={[
                                { value: "default", label: "Selecione um nível" },
                                { value: "INFANTIL", label: "Ensino Infantil" },
                                { value: "FUNDAMENTAL", label: "Ensino Fundamental" },
                                { value: "MEDIO", label: "Ensino Médio" },
                            ]}
                        />
                        <SelectioField
                            label="Área de Conhecimento"
                            value={questionRequest.knowledgeArea}
                            name="knowledgeArea"
                            onChange={handleChangeCategories}
                            required
                            className="max-w-none"
                            options={[
                                { value: "", label: "Selecione uma área" },
                                { value: "MATEMATICA", label: "Matemática" },
                                { value: "LINGUAGENS", label: "Linguagens" },
                                { value: "CIENCIAS_HUMANAS", label: "Ciências Humanas" },
                                { value: "CIENCIAS_NATUREZA", label: "Ciências da Natureza" },
                                { value: "HISTORIA", label: "História" },
                            ]}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <SelectioField
                            label="Dificuldade"
                            value={questionRequest.difficulty}
                            name="difficulty"
                            onChange={handleChangeCategories}
                            required
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
                            required
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
                            required
                            onChange={handleChangeCategories}
                            options={[
                                { value: "", label: "Selecione uma competência" },
                                { value: "COMPREENDER", label: "Compreender" },
                                { value: "INTERPRETAR", label: "Interpretar" },
                                { value: "ANALISAR", label: "Analisar" },
                                { value: "REFLETIR", label: "Refletir" },
                            ]}
                            className="max-w-none"
                        />
                        <SelectioField
                            label="Tipo de Questão"
                            value={questionRequest.type}
                            name="type"
                            required
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
                            required
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
                <section className="mt-4 flex flex-col gap-8">
                    <TitleSection title="Conteúdo da Questão" />
                    <Tiptap
                        setContent={handleContent}
                        content={questionRequest.content}
                    />
                </section>
                {questionRequest.type === "multiple-choice" && (
                    <section className="mt-4  flex flex-col gap-8">
                    <div className="flex justify-between items-center">
                        <TitleSection title="Alternativas da Questão" />
                        <Button type="button" onClick={handleOpenAddAlternative}>
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
                                {alternativesList}
                                {provided.placeholder}
                            </div>
                        )}
                        </Droppable>
                    </DragDropContext>
                    </section>
                )}
                <div className="mt-2">
                    <Button type="submit">Criar Questão</Button>
                </div>
            </form>
        </Main>
        {modalAddAlternativeIsOpen && <ModalAddAlternative />}
        {modalEditAlternativeIsOpen && <ModalEditAlternative />}
        <Toaster duration={5000} position="top-right" />
        </>
    );
}
