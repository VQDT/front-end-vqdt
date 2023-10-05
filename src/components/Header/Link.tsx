import { ReactNode } from "react";
import style from "./styles.module.css";

interface LinkProps {
  children: ReactNode;
  url: string
}

function Link({ url, children }: LinkProps) {
  return(
    <li className={style.linkContainer}>
      <a href={url} className={style.link}>
        { children}
      </a>
    </li>
  );
}

export default Link;