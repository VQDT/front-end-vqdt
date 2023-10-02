import { ReactNode } from "react";
import style from "./styles.module.css";

interface ListLinkProps {
  children: ReactNode | ReactNode[];
}

function ListLink({ children }: ListLinkProps) {
  return(
    <ul className={style.listLink}>
      { children }
    </ul>
  );
}

export default ListLink;