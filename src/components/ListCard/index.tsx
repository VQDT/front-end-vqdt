import { ReactNode } from "react";
import style from "./styles.module.css"

interface ListCardProps {
  children: ReactNode;
}

function ListCard({ children }: ListCardProps) {
  return(
    <div className={style.listCardContainer}>
      <ul className={style.listCard}>{ children }</ul>
    </div>
  );
}

export default ListCard;