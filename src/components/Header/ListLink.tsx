import { ReactNode } from "react";

interface ListLinkProps {
  children: ReactNode | ReactNode[];
}

function ListLink({ children }: ListLinkProps) {
  return(
    <ul className="flex">
      { children }
    </ul>
  );
}

export default ListLink;