import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
}

function Input({ className, ...rest}: InputProps) {
  return(
    <input
      {...rest}
      className={`border rounded-lg p-2 w-full my-2 ${className}`}
    />
  );
}

export default Input;