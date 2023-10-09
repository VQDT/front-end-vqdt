import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode[];
}

function Container({ children }: ContainerProps) {
  return(
    <div className="w-[720px] h-80 rounded-3xl shadow-md flex flex-col">
      {children}
    </div>
  );
}

export default Container;