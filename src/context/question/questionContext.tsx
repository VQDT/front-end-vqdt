import {
  ChangeEvent,
  FormEvent,
  ReactNode,
  createContext,
  useState,
} from "react";
import {
  Question,
  QuestionArea,
  QuestionDifficulty,
  QuestionLevel,
  QuestionRequest,
} from "../../models/Question";
import { TypeContentAux } from "../../models/ContentAux";
import { toast } from "sonner";
import { AlternativeRequest } from "../../models/Alternative";
import { useAPI } from "../../axios";
import { AxiosError } from "axios";
import { JSONContent } from "@tiptap/react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { UserOutput } from "../../models/User";
import { DropResult } from "@hello-pangea/dnd";

interface QuestionContextProps {
  questionRequest: QuestionRequest;
  alternatives: AlternativeRequest[];
  isLoading: boolean;
  modalAddAlternativeIsOpen: boolean;
  contentAlternative: string;
  content: JSONContent | undefined;
  modalEditAlternativeIsOpen: boolean;
  elaboratorQuestions: Question[];
  reviewerQuestions: Question[];
  handleChangeContentAlternative: (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleAddAlternative: () => void;
  handleCloseAddAlternative: () => void;
  handleOpenAddAlternative: () => void;
  deleteAlternative: (index: number) => void;
  handleOpenModalEditAlternative: (index: number) => void;
  handleCloseModalEditAlternative: () => void;
  handleEditAlternative: () => void;
  handleDragEnd: (event: DropResult) => void;
  handleChangeCategories: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleType: (event: ChangeEvent<HTMLSelectElement>) => void;
  changeCorrectAlternative: (index: number) => void;
  handleContent: (alterContentAux: JSONContent) => void;
  handleSubmitQuestion: (
    event: FormEvent<HTMLFormElement>,
    questionId?: string
  ) => Promise<boolean>;
  getElaboratorQuestions: () => void;
  getQuestionById: (questionId: string) => void;
  getReviewerQuestions: () => void;
  cleanQuestion: () => void;
}

export const QuestionContext = createContext<QuestionContextProps | null>(null);

const initState: QuestionRequest = {
  content: {} as JSON,
  knowledgeLevel: "" as QuestionLevel,
  knowledgeArea: "" as QuestionArea,
  difficulty: "" as QuestionDifficulty,
  skill: "",
  competence: "",
  alternatives: [],
  type: "multiple-choice",
  isCorrect: undefined,
};

export function QuestionProvider({ children }: { children: ReactNode }) {
  const instance = useAPI();
  const [questionRequest, setQuestionRequest] =
    useState<QuestionRequest>(initState);
  const [contentAlternative, setContentAlternative] = useState<string>("");
  const [modalAddAlternativeIsOpen, setModalAddAlternativeIsOpen] =
    useState(false);
  const [modalEditAlternativeIsOpen, setModalEditAlternativeIsOpen] =
    useState(false);
  const [indexContentEdit, setIndexContentEdit] = useState<number | null>(null);
  const [content, setContent] = useState<JSONContent>();
  const [elaboratorQuestions, setElaboratorQuestions] = useState<Question[]>(
    []
  );
  const [reviewerQuestions, setReviewerQuestions] = useState<Question[]>([]);
  const user = useAuthUser() as UserOutput;
  const [isLoading, setIsLoading] = useState(true);

  async function getElaboratorQuestions() {
    try {
      const response = await instance.get("/questions/elaborator/" + user.id);
      setElaboratorQuestions(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getReviewerQuestions() {
    try {
      const response = await instance.get("/questions/reviewer/" + user.id);
      console.log(response);
      setReviewerQuestions(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getQuestionById(questionId: string) {
    try {
      const response = await instance.get("/questions/" + questionId);
      if (response) {
        console.log(response);
        setQuestionRequest(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeCategories(event: ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target;
    console.log(name, value);
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

  function handleContent(contentAux: JSONContent) {
    setContent(contentAux);
  }

  function handleOpenAddAlternative() {
    setModalAddAlternativeIsOpen(true);
  }

  function handleCloseAddAlternative() {
    setContentAlternative("");
    setModalAddAlternativeIsOpen(false);
  }

  function cleanQuestion() {
    console.log("clean");
    setQuestionRequest(initState);
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

  function handleDragEnd(event: DropResult) {
    const { destination } = event;

    if (!destination) return;

    //trocar a ordem das alternativas
    /*
    const { source } = event;
    const alternatives = questionRequest.alternatives;
    const [removed] = alternatives.splice(source.index, 1);
    alternatives
      .splice(destination.index, 0, removed)
      .map((item, index) => (item.content = index));

    setQuestionRequest((state) => ({
      ...state,
      contentAux,
    }));

    */
  }

  async function handleSubmitQuestion(
    event: FormEvent<HTMLFormElement>,
    questionId?: string
  ): Promise<boolean> {
    event.preventDefault();

    if (!content) {
      toast.error("Questão sem conteúdo!", {
        style: {
          backgroundColor: "#F63B42",
          color: "white",
        },
      });
      return false;
    }

    if (
      questionRequest.alternatives.length < 2 &&
      questionRequest.type === "multiple-choice"
    ) {
      toast.error("Questão deve ter no mínimo 2 alternativas", {
        style: {
          backgroundColor: "#F63B42",
          color: "white",
        },
      });
      return false;
    }

    try {
      const formData = new FormData();
      formData.append("level", questionRequest.knowledgeLevel);
      formData.append("area", questionRequest.knowledgeArea);
      formData.append("difficulty", questionRequest.difficulty);
      formData.append("skill", questionRequest.skill);
      formData.append("competence", questionRequest.competence);
      formData.append("type", questionRequest.type);
      formData.append("content", JSON.stringify(content));
      if (questionRequest.type === "true-or-false")
        formData.append("isCorrect", JSON.stringify(questionRequest.isCorrect));

      questionRequest.alternatives.forEach((alternative, index) => {
        formData.append(`alternatives[${index}][content]`, alternative.content);
        formData.append(
          `alternatives[${index}][correct]`,
          JSON.stringify(alternative.correct)
        );
      });

      formData.append("userId", user.id);

      if (questionId) {
        formData.append("questionId", questionId);
      }

      const response = questionId
        ? await instance.put("/questions", formData)
        : await instance.post("/questions", formData);

      if (response.status === 201 || response.status === 200) {
        const message =
          response.status === 201
            ? "Questão criada com sucesso"
            : "Questão editada com sucesso";
        toast.success(message);
        setQuestionRequest(initState);
        return true;
      } else {
        toast.error("Erro ao submeter questão");
        return false;
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message || "Erro ao criar questão");
      }
      toast.error("Erro ao criar questão");
    }

    return false;
  }

  return (
    <QuestionContext.Provider
      value={{
        questionRequest,
        handleChangeCategories,
        content: content,
        handleType,
        handleContent,
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
        handleDragEnd,
        getElaboratorQuestions,
        elaboratorQuestions,
        getQuestionById,
        getReviewerQuestions,
        reviewerQuestions,
        cleanQuestion,
        isLoading,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}
