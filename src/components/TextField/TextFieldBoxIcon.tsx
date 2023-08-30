import { ReactNode } from "react";

interface TextFieldBoxIconProps {
    children: ReactNode;
}

function TextFieldBoxIcon(props: TextFieldBoxIconProps) {
    return (
        <div className=" 
            bg-white border-2 border-gray-500 rounded text-gray-500
            flex items-center
            focus-within:border-primary
            hover:border-gray-900 hover:text-gray-900
            [&>input]:border-none
            
        ">
            {props.children}
        </div>
    );
}

export default TextFieldBoxIcon;