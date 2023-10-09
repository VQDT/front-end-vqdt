import { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  children: ReactNode | ReactNode[];
  variant?: "solid" | "outline";
  color?: "default" | "confirm" | "alert" | "warning" | "disable";
  type?: "button" | "submit" | "reset";
  handleClick?: (event: MouseEvent) => void;
}

function Button({variant = "solid", color = "default", children, handleClick, type = "button"}: ButtonProps) {
  return(
    <button 
      className={`button ${variant} ${color}`}
      type={type}
      onClick={handleClick}
    >
      { children }
    </button>
  );
}

export default Button;