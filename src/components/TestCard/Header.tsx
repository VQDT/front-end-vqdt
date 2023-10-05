import { ReactNode } from "react";
import style from "./style.module.css";

interface HeaderProps {
  children: ReactNode[];
}

function Header({ children }: HeaderProps) {
  return(
    <div className={style.header}>
      { children }
    </div>
  );
}

export default Header;