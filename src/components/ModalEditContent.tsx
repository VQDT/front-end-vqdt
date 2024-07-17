import { AiOutlineClose } from "react-icons/ai";
import SelectField from "./SelectField";
import { TextArea } from "./TextArea";
import { useQuestion } from "../context/question/useQuestionContext";
import { ContainerModal } from "./ContainerModal";

export function ModalEditContent() {
  const {
    contentAux,
    handleType,
    handleContent,
    handleContentImage,
    handleCloseModalEditContent,
    handleEditContentAux,
  } = useQuestion();

  return (
    <ContainerModal>
        <button
          type="button"
          className="absolute right-4 top-4"
          onClick={handleCloseModalEditContent}
        >
          <AiOutlineClose />
        </button>
        <h2 className="text-sky-600 font-semibold text-xl">
          Editar Conteúdo Auxiliar
        </h2>
        <div className="mt-4 flex flex-col gap-2">
          <SelectField
            label="Selecione o tipo de conteúdo"
            value={contentAux?.type}
            required
            options={[
              { value: "", label: "Selecione um tipo" },
              { value: "title", label: "Título" },
              { value: "text", label: "Texto" },
              { value: "image", label: "Imagem" },
              { value: "asking", label: "Pergunta" },
              { value: "ref", label: "Referência" },
            ]}
            onChange={handleType}
          />
        </div>
        <div>
          <label className="pl-3">Conteúdo</label>
          {
            contentAux.content instanceof File
            ? <input
                type="file"
                datatype="image/png, image/jpeg"
                onChange={handleContentImage}
                required
              />
            : <TextArea onChange={handleContent} children={contentAux.content} required/>
          }
        </div>
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            className="h-10 px-6 bg-sky-600 rounded-xl text-white font-semibold text-lg"
            onClick={handleEditContentAux}
          >
            Editar
          </button>
        </div>
    </ContainerModal>
  );
}
