import { ReactNode, MouseEvent } from "react";
import style from "./style.module.css";

interface ContainerProps {
  children: ReactNode[];
  handleClick?: (event: MouseEvent) => void;
}

function Container({ children, handleClick }: ContainerProps) {
  return(
    <li className={style.container} onClick={handleClick}>
      { children }
    </li>
  );
}

export default Container;