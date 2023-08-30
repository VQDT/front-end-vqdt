import { ButtonHTMLAttributes, ElementType } from "react";

interface TextFieldActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ElementType
}

function TextFieldAction({icon: Icon, ...props}: TextFieldActionProps) {
    return <button className="w-10 h-10 aspect-square grid place-content-center border-0 bg-none hover:text-primary hover:bg-secondary cursor-pointer" {...props}>{<Icon />}</button>
}

export default TextFieldAction;