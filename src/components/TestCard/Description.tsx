import { ReactNode } from "react";
import style from "./style.module.css";

interface DescriptionProps {
  children: ReactNode;
}

function Description({ children }: DescriptionProps) {
  return(
    <p className={style.description}>{ children }</p>
  );
}

export default Description;