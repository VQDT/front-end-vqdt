import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return(
    <header className="h-16 bg-Blue border-b border-Light flex justify-between">
      { children }
    </header>
  );
}

export default Container;