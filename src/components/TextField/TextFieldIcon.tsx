import { ElementType } from "react";

interface TextFieldIconProps {
    icon: ElementType;
}

function TextFieldIcon({icon: Icon}: TextFieldIconProps) {
    return <Icon className="mx-2 text-inherit"/>
}

export default TextFieldIcon;