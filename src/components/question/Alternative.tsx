import { InputHTMLAttributes } from "react";

interface AlternativeProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

function Alternative({ label, id, ...rest }: AlternativeProps) {
  return(
    <div className="flex items-center gap-3">
      <input type="radio" id={id} {...rest} className="w-6 aspect-square cursor-pointer"/>
      <label htmlFor={id} className="text-Midnight text-sm  cursor-pointer">{ label }</label>
    </div>
  )
}

export default Alternative;


