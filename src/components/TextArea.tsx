import { TextareaHTMLAttributes } from "react";

interface TextFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}


export function TextArea(props: TextFieldProps) {
  return (
    <textarea
    className="w-full h-40 mt-2 p-4 border border-gray-300 rounded-xl resize-none" 
      {...props}
    />
  );
}