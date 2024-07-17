import { AiOutlineClose } from "react-icons/ai";
import SelectField from "./SelectField";
import { TextArea } from "./TextArea";
import { useQuestion } from "../context/question/useQuestionContext";
import { ContainerModal } from "./ContainerModal";


export function ModalAddContent() {

  const { 
    handleCloseModalAddContent,
    content, 
    handleType, 
    handleContent, 
    handleContentImage, 
    handleAddContentAux 
  } = useQuestion();

  return(
    <ContainerModal>
      <button type="button" className="absolute right-4 top-4" onClick={handleCloseModalAddContent}>
        <AiOutlineClose />
      </button>
      <div>
        <h2 className="text-sky-600 font-semibold text-xl">Adicionar Conteúdo Auxiliar</h2>
        <div className="mt-4 flex flex-col gap-2">
          <SelectField 
            label="Selecione o tipo de conteúdo"
            name="type"
            value={content.type}
            required
            options={[
              { value: "", label: "Selecione um tipo" },
              { value: "title", label: "Título"},
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
            content.type === "image"
            ?  <input type="file" required datatype="image/png, image/jpeg" onChange={handleContentImage} name="content"/>
            :  <TextArea required onChange={handleContent}  name="content"/>
          }
        </div>
        <div className="mt-4 flex justify-end">
          <button type="button" className="h-10 px-6 bg-sky-600 rounded-xl text-white font-semibold text-lg" onClick={handleAddContentAux}>Adicionar</button>
        </div>
      </div>
    </ContainerModal>
  );

}

