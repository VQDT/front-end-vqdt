import {
  ChangeEvent,
  FormEvent,
  ReactNode,
  createContext,
  useState,
} from "react";
import {
  QuestionArea,
  QuestionDifficulty,
  QuestionLevel,
  QuestionRequest,
} from "../../models/Question";
import { ContentAuxRequest, CreateContentAux, TypeContentAux } from "../../models/ContentAux";
import { DropResult } from "@hello-pangea/dnd";
import ContentTitle from "../../components/ContentTitle";
import ContentText from "../../components/ContentText";
import { ContentRef } from "../../components/ContentRef";
import ContentImage from "../../components/ContentImage";
import ContentAsking from "../../components/ContentAsking";
import { toast } from "sonner";
import { AlternativeRequest } from "../../models/Alternative";
import instance from "../../axios";
import { AxiosError } from "axios";

interface QuestionContextProps {
  questionRequest: QuestionRequest;
  handleChangeCategories: (event: ChangeEvent<HTMLSelectElement>) => void;
  contentsAux: ContentAuxRequest[];
  modalAddContentIsOpen: boolean;
  handleOpenModalAddContent: () => void;
  handleCloseModalAddContent: () => void;
  modalEditContentIsOpen: boolean;
  handleOpenModalEditContent: (index: number) => void;
  handleCloseModalEditContent: () => void;
  content: CreateContentAux;
  handleType: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  handleContentImage: (event: ChangeEvent<HTMLInputElement>) => void;
  handleAddContentAux: () => void;
  handleRemoveContentAux: (index: number) => void;
  indexContentEdit: number | null;
  setIndexContentEdit: (index: number | null) => void;
  handleEditContentAux: () => void;
  handleDragEnd: (event: DropResult) => void;
  switchContent: (type: string, content: string | File) => ReactNode;
  alternatives: AlternativeRequest[];
  changeCorrectAlternative: (index: number) => void;
  modalAddAlternativeIsOpen: boolean;
  contentAlternative: string;
  handleChangeContentAlternative: (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleAddAlternative: () => void;
  handleCloseAddAlternative: () => void;
  handleOpenAddAlternative: () => void;
  deleteAlternative: (index: number) => void;
  modalEditAlternativeIsOpen: boolean;
  handleOpenModalEditAlternative: (index: number) => void;
  handleCloseModalEditAlternative: () => void;
  handleEditAlternative: () => void;
  handleSubmitQuestion: (event: FormEvent<HTMLFormElement>) => void;
  contentAux: CreateContentAux;
}

export const QuestionContext = createContext<QuestionContextProps | null>(null);

const initState: QuestionRequest = {
  level: "" as QuestionLevel,
  area: "" as QuestionArea,
  difficulty: "" as QuestionDifficulty,
  skill: "",
  competence: "",
  alternatives: [],
  contentAux: [],
  type: "multiple-choice",
};

export function QuestionProvider({ children }: { children: ReactNode }) {
  const [questionRequest, setQuestionRequest] = useState<QuestionRequest>(initState);
  const [content, setContent] = useState<CreateContentAux>({
    type: "" as TypeContentAux,
    content: "",
  });
  const [contentAlternative, setContentAlternative] = useState<string>("");
  const [contentAux, setContentAux] = useState<CreateContentAux>({} as CreateContentAux);
  const [modalAddContentIsOpen, setmodalAddContentIsOpen] = useState(false);
  const [modalEditContentIsOpen, setModalEditContentIsOpen] = useState(false);
  const [modalAddAlternativeIsOpen, setModalAddAlternativeIsOpen] =
    useState(false);
  const [modalEditAlternativeIsOpen, setModalEditAlternativeIsOpen] =
    useState(false);
  const [indexContentEdit, setIndexContentEdit] = useState<number | null>(null);

  function handleChangeCategories(event: ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target;
    setQuestionRequest({
      ...questionRequest,
      [name]: name === "isCorrect" ? value === "true" : value,
    });
  }

  function handleType(event: ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    setContent((state) => {
      return { ...state, type: value as TypeContentAux };
    });
  }

  function handleContent(event: ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value;
    setContent((state) => {
      return { ...state, content: value };
    });
  }

  function handleContentImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files && event.currentTarget.files[0];
    console.log(file)
    if (file) {
      setContent({
        type: "image",
        content: file,
      });
    }
  }

  function handleResetContent() {
    setContent({ type: "" as TypeContentAux, content: "" });
  }

  function addContentAux() {
    setQuestionRequest((state) => {
      return {
        ...state,
        contentAux: [
          ...state.contentAux,
          {
            type: content.type,
            content: content.content,
            order: state.contentAux.length + 1,
          },
        ],
      };
    });
  }

  function handleAddContentAux() {
    if (!content.type || !content.content || content.content === "") {
      toast.error("Preencha todos os campos");
    } else {
      addContentAux();
      handleResetContent();
      setmodalAddContentIsOpen(false);
    }
  }

  function handleRemoveContentAux(index: number) {
    setQuestionRequest((state) => {
      const contentAux = state.contentAux.filter((_, i) => i !== index);
      return {
        ...state,
        contentAux: contentAux.map((item, index) => ({
          ...item,
          order: index,
        })),
      };
    });
  }

  function handleOpenModalEditContent(index: number) {
    setIndexContentEdit(index);
    setContentAux({
      content: questionRequest.contentAux[index].content,
      type: questionRequest.contentAux[index].type
    });
    setModalEditContentIsOpen(true);
  }

  function EditContentAux() {
    setQuestionRequest((state) => {
      const contentAux = state.contentAux.map((item, index) => {
        if (index === indexContentEdit) {
          return {
            ...item,
            type: content.type,
            content: content.content,
          };
        }
        return item;
      });
      return {
        ...state,
        contentAux,
      };
    });
  }

  function handleEditContentAux() {
    if (!content.type || !content.content || content.content === "") {
      toast.error("Preencha todos os campos");
    } else {
      EditContentAux();
      handleResetContent();
      setIndexContentEdit(null);
      setModalEditContentIsOpen(false);
    }
  }

  function handleOpenModalAddContent() {
    setmodalAddContentIsOpen(true);
  }

  function handleCloseModalEditContent() {
    handleResetContent();
    setIndexContentEdit(null);
    setModalEditContentIsOpen(false);
  }

  function handleCloseModalAddContent() {
    handleResetContent();
    setmodalAddContentIsOpen(false);
  }

  function handleDragEnd(event: DropResult) {
    const { source, destination } = event;

    if (!destination) return;

    const contentAux = questionRequest.contentAux;
    const [removed] = contentAux.splice(source.index, 1);
    contentAux
      .splice(destination.index, 0, removed)
      .map((item, index) => (item.order = index));

    setQuestionRequest((state) => ({
      ...state,
      contentAux,
    }));
  }

  function switchContent(type: string, content: string | File) {
    switch (type) {
      case "title":
        return (
          <ContentTitle>{typeof content === "string" && content}</ContentTitle>
        );

      case "text":
        return (
          <ContentText>{typeof content === "string" && content}</ContentText>
        );

      case "ref":
        return (
          <ContentRef>{typeof content === "string" && content}</ContentRef>
        );

      case "image":
        if (typeof content !== "string") {
          return <ContentImage src={URL.createObjectURL(content)} />;
        }
        break;

      case "asking":
        return (
          <ContentAsking>
            {typeof content === "string" && content}
          </ContentAsking>
        );
    }
  }

  function handleOpenAddAlternative() {
    setModalAddAlternativeIsOpen(true);
  }

  function handleCloseAddAlternative() {
    setContentAlternative("");
    setModalAddAlternativeIsOpen(false);
  }

  function changeCorrectAlternative(index: number) {
    setQuestionRequest((state) => {
      const alternatives = state.alternatives.map((alternative, i) => {
        if (i === index) {
          return {
            ...alternative,
            correct: !alternative.correct,
          };
        }
        return {
          ...alternative,
          correct: false,
        };
      });
      return {
        ...state,
        alternatives,
      };
    });
  }

  function addAlternative() {
    setQuestionRequest((state) => {
      return {
        ...state,
        alternatives: [
          ...state.alternatives,
          {
            content: contentAlternative,
            correct: false,
          },
        ],
      };
    });
  }

  function handleChangeContentAlternative(
    event: ChangeEvent<HTMLTextAreaElement>
  ) {
    setContentAlternative(event.target.value);
  }

  function handleAddAlternative() {
    if (contentAlternative === "") {
      toast.error("Preencha todos os campos");
    } else {
      addAlternative();
      handleCloseAddAlternative();
    }
  }

  function deleteAlternative(index: number) {
    console.log(index);
    setQuestionRequest((state) => {
      const alternatives = state.alternatives.filter((_, i) => i !== index);
      return {
        ...state,
        alternatives,
      };
    });
  }

  function handleOpenModalEditAlternative(index: number) {
    setIndexContentEdit(index);
    setContentAlternative(questionRequest.alternatives[index].content);
    setModalEditAlternativeIsOpen(true);
  }

  function handleCloseModalEditAlternative() {
    setModalEditAlternativeIsOpen(false);
    setContentAlternative("");
  }

  function editAlternative() {
    setQuestionRequest((state) => {
      const alternatives = state.alternatives.map((alternative, index) => {
        if (index === indexContentEdit) {
          return {
            ...alternative,
            content: contentAlternative,
          };
        }
        return alternative;
      });
      return {
        ...state,
        alternatives,
      };
    });
  }

  function handleEditAlternative() {
    if (contentAlternative === "") {
      toast.error("Preencha todos os campos");
    } else {
      editAlternative();
      handleCloseModalEditAlternative();
    }
  }

  async function handleSubmitQuestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if(questionRequest.contentAux.length === 0) {
      toast.error("Questão sem conteúdo!", {
        style: {
          backgroundColor: "#F63B42",
          color: "white"
        }
      });
      return;
    }

    if(questionRequest.contentAux.length < 2 && questionRequest.type === "multiple-choice") {
      toast.error("Questão deve ter no mínimo 2 alternativas", {
        style: {
          backgroundColor: "#F63B42",
          color: "white"
        }
      });
      return;
    }

    try {
      console.log(questionRequest);
      const formData = new FormData();
      formData.append("level", questionRequest.level);
      formData.append("area", questionRequest.area);
      formData.append("difficulty", questionRequest.difficulty);
      formData.append("skill", questionRequest.skill);
      formData.append("competence", questionRequest.competence);
      formData.append("type", questionRequest.type);
      questionRequest.contentAux.forEach((contentAux, index) => {
        formData.append(`contentAux[${index}][type]`, contentAux.type);
        formData.append(
          `contentAux[${index}][order]`,
          String(contentAux.order)
        );
        if (contentAux.content instanceof File) {
          formData.append(
            `contentAux[${index}][content]`,
            contentAux.content.name
          );
          formData.append("image", contentAux.content);
        } else {
          formData.append(`contentAux[${index}][content]`, contentAux.content);
        }
      });
      questionRequest.alternatives.forEach((alternative, index) => {
        formData.append(`alternatives[${index}][content]`, alternative.content);
        formData.append(
          `alternatives[${index}][correct]`,
          JSON.stringify(alternative.correct)
        );
      });

      const response = await instance.post("/questions", formData);
      if (response.status === 201) {
        toast.success("Questão criada com sucesso");
        setQuestionRequest(initState);
      } else {
        toast.error("Erro ao criar questão");
      }
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message || "Erro ao criar questão");
      }
      toast.error("Erro ao criar questão");
    }
  }

  return (
    <QuestionContext.Provider
      value={{
        questionRequest,
        handleChangeCategories,
        contentsAux: questionRequest.contentAux,
        modalAddContentIsOpen,
        handleOpenModalAddContent,
        handleCloseModalAddContent,
        modalEditContentIsOpen,
        handleOpenModalEditContent,
        handleCloseModalEditContent,
        content: content,
        handleType,
        handleContent,
        handleContentImage,
        handleAddContentAux,
        handleRemoveContentAux,
        indexContentEdit,
        setIndexContentEdit,
        handleEditContentAux,
        handleDragEnd,
        switchContent,
        alternatives: questionRequest.alternatives,
        changeCorrectAlternative,
        modalAddAlternativeIsOpen,
        contentAlternative,
        handleChangeContentAlternative,
        handleAddAlternative,
        handleCloseAddAlternative,
        handleOpenAddAlternative,
        deleteAlternative,
        modalEditAlternativeIsOpen,
        handleOpenModalEditAlternative,
        handleCloseModalEditAlternative,
        handleEditAlternative,
        handleSubmitQuestion,
        contentAux,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}
