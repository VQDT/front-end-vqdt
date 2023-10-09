import { ReactNode } from "react";
import style from "./style.module.css";

interface SubTextProps {
  children: ReactNode[] | ReactNode;
}

function SubText({ children }: SubTextProps) {
  return(
    <div className={style.subText}>{ children }</div>
  );
}

export default SubText;