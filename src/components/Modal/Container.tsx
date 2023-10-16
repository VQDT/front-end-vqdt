import { ReactNode } from "react";

interface ContainerProps {
  children:  ReactNode | ReactNode[]
}

function Container({ children }: ContainerProps) {
  return(
    <div className="w-full h-screen absolute top-0 left-0 flex justify-center items-center backdrop-blur">
      { children }
    </div>
  );
}

export default Container;