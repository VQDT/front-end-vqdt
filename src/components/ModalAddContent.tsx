import { ChangeEvent, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TypeContentAux } from "../models/ContentAux";
import SelectField from "./SelectField";
import { TextArea } from "./TextArea";


interface ModalAddContentProps {
  addContentAux: (type: TypeContentAux, content: string) => void;
  toggleModal: () => void;
}

export function ModalAddContent({ toggleModal, addContentAux }: ModalAddContentProps) {

  const [ contentAux, setContentAux ] = useState<{ type: string, content: string }>({
    type: "" as TypeContentAux,
    content: ""
  });

  function handleType(event: ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    setContentAux((state) => ({ ...state, type: value }));
  }

  function handleContent(event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setContentAux((state) => ({ ...state, content: value }));
  }

  function handleContentImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files && event.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setContentAux((state) => ({ ...state, content: reader.result as string }));
    }
    file && reader.readAsDataURL(file);
  }

  function handleAddContentAux() {
    addContentAux(contentAux.type as TypeContentAux, contentAux.content)
    setContentAux((state) => ({ ...state, type: "", content: "" }));
    toggleModal();
  }

  return(

    <div className="top-0 left-0 w-full h-full flex justify-center items-center absolute backdrop-blur">
      <div className="w-full max-w-3xl h-auto p-8 bg-white border border-gray-300 rounded-xl shadow relative">
        <button className="absolute right-4 top-4" onClick={toggleModal}>
          <AiOutlineClose />
        </button>
        <h2 className="text-sky-600 font-semibold text-xl">Conteúdo Auxiliar</h2>
        <div className="mt-4 flex flex-col gap-2">
          <label className="pl-3">Tipo</label>
          <SelectField 
            label="Selecione o tipo de conteúdo"
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
            contentAux.type === "image"
            ?  <input type="file" datatype="image/png, image/jpeg" onChange={handleContentImage}/>
            :  <TextArea onChange={handleContent} />
          }
        </div>
        <div className="mt-4 flex justify-end">
          <button className="h-10 px-6 bg-sky-600 rounded-xl text-white font-semibold text-lg" onClick={handleAddContentAux}>Adicionar</button>
        </div>
      </div>
    </div>

  );

}

