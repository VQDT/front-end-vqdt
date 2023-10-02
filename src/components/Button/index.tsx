import { ReactNode, MouseEvent } from "react";
import style from "./styles.module.css";

interface ButtonProps {
  children: ReactNode | ReactNode[];
  variant?: "solid" | "outline";
  color?: "default" | "confirm" | "alert" | "warning" | "disable";
  type?: "button" | "submit" | "reset";
  handleClick?: (event: MouseEvent) => void;
}

function Button({variant = "solid", color = "default", children, handleClick, type = "button"}: ButtonProps) {

  const variantClass = {
    solid: style.solid,
    outline: style.outline
  }

  const colorClass = {
    default: style.default,
    confirm: style.confirm,
    alert: style.alert,
    warning: style.warning,
    disable: style.disable
  }

  return(
    <button 
      className={`
        ${style.button} 
        ${variantClass[variant]} 
        ${colorClass[color]}
      `}
      type={type}
      onClick={handleClick}
    >
      { children }
    </button>
  );
}

export default Button;