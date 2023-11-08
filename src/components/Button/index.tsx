import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  color?: "default" | "confirm" | "alert" | "warning" | "disable";
  size?: 'w-full' | 'w-4'
}

function Button({variant = "solid", color = "default", size, ...props}: ButtonProps) {
  return(
    <button 
      className={`button ${variant} ${color} ${size}`}
      {...props}
    >
      { props.children }
    </button>
  );
}

export default Button;