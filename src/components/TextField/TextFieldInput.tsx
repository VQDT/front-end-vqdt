import { InputHTMLAttributes } from "react";

interface TextFieldInputProps extends InputHTMLAttributes<HTMLInputElement>{
    type?: "text" | "email" | "tel" | "date" | "datetime" | "number";
}

function TextFieldInput({type = "text", ...props}: TextFieldInputProps) {
    return (
        <input className="
            w-full h-10 rounded border-2 border-gray-500 pl-1 outline-0
            hover:border-gray-900 focus:border-primary
            " 
            type={type} {...props}
        />
    )
}

export default TextFieldInput;