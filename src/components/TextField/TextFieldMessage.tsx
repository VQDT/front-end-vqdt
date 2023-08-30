import { ReactNode } from "react";

interface TextFieldMessageProps {
    children: ReactNode;
    type?: "confirm" | "alert" | "attention" | "secondary";
}

function TextFieldMessage({type = "secondary", ...props}: TextFieldMessageProps) {

    const bgColor = {
        confirm: "bg-confirm",
        alert: "bg-alert",
        attention: "bg-attention",
        secondary: "bg-secondary text-gray-900"
    }

    return <p className={`w-max py-1 pr-4 rounded text-white text-base flex items-center ${bgColor[type]}`}>{props.children}</p>
}

export default TextFieldMessage;