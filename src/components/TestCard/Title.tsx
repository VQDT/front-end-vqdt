import { ReactNode } from "react";
import style from "./style.module.css";

interface TitleProps {
  children: ReactNode;
}

function Title({ children }: TitleProps) {
  return(
    <p className={ style.title }>
      { children }
    </p>
  );
}

export default Title;