import { ReactNode } from "react";

interface TextFieldRootProps {
    children: ReactNode;
}

function TextFieldRoot(props: TextFieldRootProps) {
    return <div className="flex flex-col gap-1">{props.children}</div>
}

export default TextFieldRoot;