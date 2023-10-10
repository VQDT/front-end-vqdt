interface InputProps extends HTMLInputElement{
}

function Input({ type = "text", placeholder = "default" }: InputProps) {
  return(
    <input 
      className={`border rounded-lg p-2 w-full my-2`}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Input;