import { AiOutlineClose } from "react-icons/ai";
import { TextArea } from "./TextArea";
import { useQuestion } from "../context/question/useQuestionContext";
import { ContainerModal } from "./ContainerModal";

export function ModalAddAlternative() {
  const { contentAlternative, handleChangeContentAlternative, handleAddAlternative, handleCloseAddAlternative } = useQuestion();

  return (
    <ContainerModal>
        <button type="button" className="absolute right-4 top-4" onClick={handleCloseAddAlternative}>
          <AiOutlineClose />
        </button> 
        <form action="#">
          <h2 className="text-sky-600 font-semibold text-xl">
            Adicionar Alternativa
          </h2>
          <div className="mt-5">
            <label className="pl-3">Conteúdo da alternativa</label>
            <TextArea
              name="content"
              value={contentAlternative}
              required
              onChange={handleChangeContentAlternative}
            />
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              className="h-10 px-6 bg-sky-600 rounded-xl text-white font-semibold text-lg"
              onClick={handleAddAlternative}
            >
              Adicionar
            </button>
          </div>
        </form>
    </ContainerModal>
  );
}
