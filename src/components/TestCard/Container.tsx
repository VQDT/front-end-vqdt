import { ReactNode, MouseEvent } from "react";

interface ContainerProps {
  children: ReactNode[];
  handleClick?: (event: MouseEvent) => void;
}

function Container({ children, handleClick }: ContainerProps) {
  return (
    <li
      className="w-80 h-44 p-3 bg-White border border-dashed border-Blue rounded-md  
        transition-all cursor-pointer list-none hover:border-solid flex flex-col flex-shrink-0"
      onClick={handleClick}
    >
      {children}
    </li>
  );
}

export default Container;
