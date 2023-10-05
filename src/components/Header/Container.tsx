import { ReactNode } from "react";
import style from "./styles.module.css";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return(
    <header className={style.container}>
      { children }
    </header>
  );
}

export default Container;