import { AiOutlineClose } from "react-icons/ai";
import { TextArea } from "./TextArea";
import { useQuestion } from "../context/question/useQuestionContext";

export function ModalEditAlternative() {
  const {
    contentAlternative,
    handleCloseModalEditAlternative,
    handleEditAlternative,
    handleChangeContentAlternative,
  } = useQuestion();


  return (
    <div className="top-0 left-0 w-full h-full flex justify-center items-center absolute backdrop-blur">
      <div className="w-full max-w-3xl h-auto p-8 bg-white border border-gray-300 rounded-xl shadow relative">
        <button
          className="absolute right-4 top-4"
          onClick={handleCloseModalEditAlternative}
        >
          <AiOutlineClose />
        </button>
        <form action="#">
          <h2 className="text-sky-600 font-semibold text-xl">
            Editar Alternativa
          </h2>
          <div className="mt-5">
            <label className="pl-3">Conteúdo da alternativa</label>
            <TextArea
              name="content"
              onChange={handleChangeContentAlternative}
            >
              {contentAlternative}
            </TextArea>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="h-10 px-6 bg-sky-600 rounded-xl text-white font-semibold text-lg"
              onClick={handleEditAlternative}
            >
              Editar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
