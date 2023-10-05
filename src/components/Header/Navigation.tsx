import { ReactNode } from "react";
import style from "./styles.module.css";

interface NavigationProps {
  children: ReactNode;
}

function Navigation({ children }: NavigationProps) {
  return(
    <nav className={style.navigation}>
      { children }
    </nav>
  );
}

export default Navigation;