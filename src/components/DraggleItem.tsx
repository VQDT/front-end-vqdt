import { Draggable } from "@hello-pangea/dnd";
import { useState } from "react";
import { AiOutlineClose, AiOutlineEdit, AiOutlineMenu } from "react-icons/ai";

import ContentTitle from "./ContentTitle";
import ContentText from "./ContentText";
import ContentImage from "./ContentImage";
import ContentAsking from "./ContentAsking";
import { ContentRef } from "./ContentRef";

function DraggleItem({type, content, index}: {type: string, content: string, index: number}) {

  const [ hover, setHover ] = useState<boolean>(false);

  function switchContent(type: string, content: string) {
    switch (type) {
      case "title":
        return <ContentTitle>{content}</ContentTitle>;
    
      case "text":
        return <ContentText>{content}</ContentText>;

      case "ref":
        return <ContentRef>{content}</ContentRef>;

      case "image":
        return <ContentImage src={content}/>;

      case "asking":
        return <ContentAsking>{content}</ContentAsking>;
    }
  }

  return(
    <Draggable draggableId={index.toString()} index={index}>
      {(provided) => (
        <div className="w-full p-4 bg-white border border-zinc-300 rounded-md shadow flex items-stretch gap-6 relative overflow-hidden" 
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
          {
            hover &&
            <div className="bg-white border-l border-b border-zinc-300 shadow flex justify-start absolute top-0 right-0">
              <button className="p-3 border-r border-zinc-300 hover:bg-blue-200 aspect-square grid place-content-center">
                <AiOutlineEdit />
              </button>
              <button className="p-3 hover:bg-red-200 aspect-square  grid place-content-center">
                <AiOutlineClose />
              </button>
            </div>
          }
        </div>
      )}
    </Draggable>
  );
}

export default DraggleItem;