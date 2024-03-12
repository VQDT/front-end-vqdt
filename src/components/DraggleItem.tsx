import { Draggable } from "@hello-pangea/dnd";
import { useState } from "react";
import { AiOutlineClose, AiOutlineEdit, AiOutlineMenu } from "react-icons/ai";
import { useQuestion } from "../context/question/useQuestionContext";

interface DraggleItemProps {
  type: string;
  content: string | File;
  index: number;
}

function DraggleItem({ type, content, index }: DraggleItemProps) {
  const [hover, setHover] = useState<boolean>(false);
  const { 
    handleRemoveContentAux, 
    handleOpenModalEditContent, 
    switchContent 
  } = useQuestion();

  return (
    <Draggable draggableId={index.toString()} index={index}>
      {(provided) => (
        <div
          className="w-full p-4 bg-white border border-zinc-300 rounded-md shadow flex items-stretch gap-6 relative overflow-hidden"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="max-w-full pr-4 border-r border-zinc-300 text-zinc-600 flex items-center">
            <AiOutlineMenu />
          </div>
          <div className="w-full flex items-center">
            {switchContent(type, content)}
          </div>
          {hover && (
            <div className="bg-white border-l border-b border-zinc-300 shadow flex justify-start absolute top-0 right-0">
              <button
                type="button"
                className="p-3 border-r border-zinc-300 hover:bg-blue-200 aspect-square grid place-content-center"
                onClick={() => handleOpenModalEditContent(index)}
              >
                <AiOutlineEdit />
              </button>
              <button
                type="button"
                className="p-3 hover:bg-red-200 aspect-square  grid place-content-center"
                onClick={() => handleRemoveContentAux(index)}
              >
                <AiOutlineClose />
              </button>
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
}

export default DraggleItem;
