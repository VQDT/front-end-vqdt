import { LabelHTMLAttributes } from "react";

interface TextFieldLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {

}

function TextFieldLabel(props: TextFieldLabelProps) {
    return(
        <label className="text-base font-medium" {...props}></label>
    );
}

export default TextFieldLabel;