import { InputHTMLAttributes, useState } from "react";
import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";
import { useQuestion } from "../context/question/useQuestionContext";

interface CreateAlternativeItemProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function CreateAlternativeItem({
  id,
  label,
  ...rest
}: CreateAlternativeItemProps) {

  const [hover, setHover] = useState<boolean>(false);
  const { deleteAlternative, handleOpenModalEditAlternative } = useQuestion();

  return (
    <form action="#">
      <div
        className="w-full p-4 bg-white border border-zinc-300 rounded-md shadow flex items-center items-stretch gap-6 relative overflow-hidden"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      > 
        {hover && (
          <div className="bg-white border-l border-b border-zinc-300 shadow flex justify-start absolute top-0 right-0">
            <button
              className="p-3 border-r border-zinc-300 hover:bg-blue-200 aspect-square grid place-content-center"
              onClick={() => handleOpenModalEditAlternative(Number(id))}
            >
              <AiOutlineEdit />
            </button>
            <button
              className="p-3 hover:bg-red-200 aspect-square  grid place-content-center"
              onClick={() => deleteAlternative(Number(id)) }
            >
              <AiOutlineClose />
            </button>
          </div>
        )}
        <div className="pr-3 border-r border-zinc-300 grid place-content-center">
          <input
            type="radio"
            id={id}
            {...rest}
            className="w-6 aspect-square cursor-pointer"
          />
        </div>
        <label htmlFor={id} className="text-Midnight text-sm  cursor-pointer">
          {label}
        </label>
      </div>
    </form>
  );
}
